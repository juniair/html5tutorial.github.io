function postproc(rootSelector) {
    var $root = $(rootSelector);

    var $codes = $root.find('code');
    $codes.each(function() {
        var $this = $(this);
        var text = $this.text();
        if(text === '@pp boxmodel') {
            processBoxmodel($this);
        } else if(text === '@pp run') {
            processRun($this);
        } else if(text === '@pp dom') {
            processDom($this);
        } else if(text === '@pp processing') {
            processProcessing($this);
        } else if(text === '@pp hide') {
            $this.parent().prev().hide(true);
        } else {
            return;
        }

        // remove preprocessor directive
        $this.parent().remove();
    });

    function processBoxmodel($element) {
        // add box-model container
        var $parent = $element.parent();
        var $prev = $parent.prev();

        if($prev.get(0).nodeName == 'BLOCKQUOTE') {
            var $boxmodelContainer = $($prev.get(0).firstChild.contentDocument.body.firstChild);

            // add overlay container...
            var $overlayContainer = $('<div class="boxmodel-overlay"></div>');
            $overlayContainer.insertAfter($boxmodelContainer);
            $overlayContainer.html($boxmodelContainer.html());
            $overlayContainer.css('position', 'absolute');
            $overlayContainer.css('top', $boxmodelContainer.position().top);
            $overlayContainer.css('width', $boxmodelContainer.width());
            $overlayContainer.css('height', $boxmodelContainer.height());

            // recursively add box-model visualizer to each element
            $overlayContainer.children().each(function() {
                _visualizeBoxmodel(this);
            });
        } else {
            var $boxmodelContainer = $('<blockquote class="boxmodel"></blockquote>');
            $boxmodelContainer.insertAfter($prev);
            $boxmodelContainer.html($prev.text());

            // add overlay container...
            var $overlayContainer = $('<blockquote class="boxmodel-overlay"></blockquote>');
            $overlayContainer.insertAfter($boxmodelContainer);
            $overlayContainer.html($prev.text());
            $overlayContainer.css('position', 'absolute');
            $overlayContainer.css('top', $boxmodelContainer.position().top);
            $overlayContainer.css('width', $boxmodelContainer.width());
            $overlayContainer.css('height', $boxmodelContainer.height());

            // recursively add box-model visualizer to each element
            $overlayContainer.children().each(function() {
                _visualizeBoxmodel(this);
            });
        }
    }

    function processRun($element) {
        var $parent = $element.parent();

        // collect successive code blocks
        var jsBlocks = [];
        var cssBlocks = [];
        var htmlBlocks = [];
        var $prev = $parent.prevAll('.highlight, code').first();

        while($prev.hasClass('highlight') || $prev.get(0).nodeName === 'CODE') {
            var lang = $prev.get(0).firstChild.firstChild.dataset.lang;
            var code = $($prev.get(0).firstChild.firstChild).text();

            if(lang === 'css') {
                cssBlocks.push(code);
            } else if(lang == 'javascript') {
                jsBlocks.push(code);
            } else if(lang == 'html') {
                htmlBlocks.push(code);
            }
            $prev = $prev.prev();
        }

        var $iframeContainer = $('<blockquote><iframe src="about:blank" style="width: 100%; height: 10px; border: 0"></iframe></blockquote>');
        $iframeContainer.insertAfter($parent);
        var doc = $iframeContainer.get(0).firstChild.contentDocument.write(
            '<!DOCTYPE html>' +
            '<html><head>' +
            '   <meta charset="utf-8">' +
            '   <link rel="stylesheet" href="/assets/css/barebone.css">' +
            '   <style>' + cssBlocks.join('\n') + '</style>' +
            '   <script>' + jsBlocks.join(';\n') + '</script>' +
            '</head><body style="margin: 0; padding: 0;"><div style="border: 1px solid transparent;">' + htmlBlocks.join('\n') + '</div></body></html>'
        );

        // adjust iframe height
        window.setTimeout(function() {
            var height = $iframeContainer.get(0).firstChild.contentDocument.body.scrollHeight;
            $($iframeContainer.get(0).firstChild).css('height', height + 'px');
        }, 100);
    }

    function processDom($element) {
        var $parent = $element.parent();
        var $prev = $parent.prevAll('.highlight, code').first();

        var code = $($prev.get(0).firstChild.firstChild).text();
        var $iframe = $('<iframe style="display:none;" src="about:blank"></iframe>');
        $iframe.insertAfter($parent);
        var root = $iframe.get(0).contentDocument.documentElement;
        var visualizeWhole = code.indexOf('<!DOCTYPE html>') === 0;
        root.innerHTML = visualizeWhole ?
            code :
            '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Example</title></head><body>' + code + '</body></html>';

        var $domContainer = $('<div class="dom"></div>');
        $domContainer.insertAfter($parent);
        _visualizeDom($domContainer.get(0), visualizeWhole ? root : root.querySelector('body'));

        $domContainer.find('li').on('click', function(e) {
            $(e.currentTarget).toggleClass('collapsed');
            e.stopPropagation();
        });
    }

    function processProcessing($element) {
        var $parent = $element.parent();
        var $prev = $parent.prevAll('.highlight, code').first();
        var code = $prev.text();
        var w = $parent.width();
        var h = Math.floor(w * 0.4);
        var $canvas = $('<canvas>');
        $canvas.insertAfter($parent);
        eval(
                'var _proc = (function(processing) {' +
                '   with(processing) {' +
                '       size(' + (w-2) + ',' + (h-2) + ');' +
                '       background(255,255,255);' +
                code +
                '   }' +
                '});' +
                'new Processing($canvas.get()[0], _proc);'
        );
    }

    function _visualizeBoxmodel(element) {
        var $element = $(element);
        $element.children().each(function() {
            _visualizeBoxmodel(this);
        });

        var style = window.getComputedStyle($element.get(0), null);

        // Visualize margin
        $element.css(
            'box-shadow',
            -parseInt(style.marginLeft) + 'px 0 0 0px rgba(249, 164, 117, 0.5), ' +
            +parseInt(style.marginRight) + 'px 0 0 0px rgba(249, 164, 117, 0.5), ' +
            '0 ' + -parseInt(style.marginTop) + 'px 0 0px rgba(249, 164, 117, 0.5), ' +
            '0 ' + +parseInt(style.marginBottom) + 'px 0 0px rgba(249, 164, 117, 0.5)'
        );

        // Visualize border
        $element.css('border-color', 'rgba(255, 208, 158, 0.5)');

        // Visualize padding and content
        $element.css('background-repeat', 'no-repeat');
        $element.css(
            'background-image',
            // paddings
            'linear-gradient(to bottom, rgba(195, 222, 183, 0.5) 0, rgba(195, 222, 183, 0.5) 100%), ' +
            'linear-gradient(to bottom, rgba(195, 222, 183, 0.5) 0, rgba(195, 222, 183, 0.5) 100%), ' +
            'linear-gradient(to bottom, rgba(195, 222, 183, 0.5) 0, rgba(195, 222, 183, 0.5) 100%), ' +
            'linear-gradient(to bottom, rgba(195, 222, 183, 0.5) 0, rgba(195, 222, 183, 0.5) 100%), ' +
            // content
            'linear-gradient(to bottom, rgba(160, 197, 232, 0.5) 0, rgba(160, 197, 232, 0.5) 100%)'
        );
        $element.css(
            'background-size',
            // paddings
            '100% ' + parseInt(style.paddingTop) + 'px, ' +
            '100% ' + parseInt(style.paddingBottom) + 'px, ' +
            parseInt(style.paddingLeft) + 'px 100%,' +
            parseInt(style.paddingRight) + 'px 100%, ' +
            // content
            '100% 100%'
        );
        $element.css(
            'background-position',
            // paddings
            'top left, ' +
            'bottom left, ' +
            'top left, ' +
            'top right, ' +
            // content
            'top left'
        );
        $element.css('background-origin', 'padding-box, padding-box, padding-box, padding-box, content-box');
    }

    function _visualizeDom(container, e) {
        var $e = $(e);
        var $container = $(container);

        var thisNode = null;
        if(e.nodeType === 1) {
            thisNode = _visualizeElement(e);
        } else if(e.nodeType === 3 && e.nodeValue.trim()) {
            thisNode = _visualizeTextnode(e);
        } else {
            return;
        }
        $container.append(thisNode);

        var children = e.childNodes;
        if(children.length === 0) return;

        var $childNodes = $('<ul></ul>');
        $container.append($childNodes);
        for(var i = 0; i < children.length; i++) {
            var $childContainer = $('<li></li>');
            $childNodes.append($childContainer);
            _visualizeDom($childContainer.get(0), children[i]);
        }
    }

    function _visualizeElement(e) {
        var $node = $('<div class="element">');
        $node.text(e.nodeName.toLowerCase());
        for(var i = 0; i < e.attributes.length; i++) {
            if(!e.attributes[i].specified) continue;

            var $attr = $('<span class="attr">');
            var $attrName = $('<span class="attr-name">');
            var $attrValue = $('<span class="attr-value">');
            $attrName.text(e.attributes[i].name);
            $attrValue.text(e.attributes[i].value);
            $attr.append($attrName);
            $attr.append($attrValue);
            $node.append($attr);
        }
        return $node.get(0);
    }

    function _visualizeTextnode(e) {
        var $node = $('<div class="textnode">');
        $node.text(e.nodeValue);
        return $node.get(0);
    }
}
