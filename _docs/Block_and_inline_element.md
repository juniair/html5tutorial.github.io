---
title: 블럭 요소와 인라인 요소
---

HTML 요소는 크게 **블럭 요소(block element 또는 block-level element)**와 **인라인 요소(inline element)**로 나눌 수 있습니다.


## 블럭 요소

[CSS](/docs/CSS.html)를 통해 스타일을 변경하지 않았다면 블럭 요소(block element)는 화면의 가로폭 전체를 차지하는 직사각형 모양을 가집니다. 모든 인라인 요소는 블럭 요소 안에 속해 있어야하며, [body 요소](/html/body.html)에 바로 담길 수 있습니다.

대표적인 블록 요소는 아래와 같습니다:

*   [p 요소](/html/p.html)
*   [h1 요소](/html/h1.html)
*   [blockquote 요소](/html/blockquote.html)
*   [ul 요소](/html/ul.html)와 [ol 요소](/html/ol.html)
*   [li 요소](/html/li.html)
*   [div 요소](/html/div.html)

이 중 [blockquote 요소)(/html/blockquote.html)와 같은 일부 블럭 요소는 인라인 요소 뿐 아니라 다른 블럭 요소를 포함할 수 있습니다. 반면 [p 요소](/html/p.html)와 같은 블럭 요소는 다른 블럭 요소를 포함할 수 없습니다.

따라서 다음은 올바른 HTML 이지만...

{% highlight html %}
<blockquote>
   <p>...인용문 1...</p>
   <p>...인용문 2...</p>
</blockquote>
{% endhighlight %}

다음 HTML은 올바르지 않습니다:

{% highlight html %}
<p><h1>제목</h1></p>
{% endhighlight %}


## 인라인 요소

인라인 요소(inline element)는 블럭 요소 혹은 다른 인라인 요소 안에만 쓰일 수 있으며 [CSS](/docs/CSS.html)를 통해 스타일을 변경하지 않았다면 기본적으로 **문장이 흐르듯** 흐르는 모양을 가집니다.

대표적인 인라인 요소는 아래와 같습니다:

*   [a 요소](/html/a.html)
*   [strong 요소](/html/strong.html)
*   [em 요소](/html/em.html)
*   [span 요소](/html/span.html)

인라인 요소는 아래와 같이 블럭 요소(``p`` 등) 안에 담겨야 하며, 여러 인라인 요소가 서로 중첩될 수 있습니다:

{% highlight html %}
<p>
    이제 <a href="http://www.google.com">이 링크를 클릭하여 <strong>구글</strong>로 이동</a> 합시다.
</p>
{% endhighlight %}

위 예시에서 ``p``는 블럭 요소이고, ``a``, ``strong``은 인라인 요소입니다. 특히 ``strong`` 요소는 ``a`` 요소 안에 중첩되어 쓰이고 있습니다. 위 문서는 아래와 같이 표현됩니다:

``@pp run``


## 블럭 요소 및 인라인 요소 목록

다음은 HTML5의 블럭 요소 목록입니다:

*   [address](/html/address.html)
*   [article](/html/article.html)
*   [aside](/html/aside.html)
*   [audio](/html/audio.html)
*   [blockquote](/html/blockquote.html)
*   [canvas](/html/canvas.html)
*   [dd](/html/dd.html)
*   [div](/html/div.html)
*   [dl](/html/dl.html)
*   [fieldset](/html/fieldset.html)
*   [figcaption](/html/figcaption.html)
*   [figure](/html/figure.html)
*   [footer](/html/footer.html)
*   [form](/html/form.html)
*   [h1](/html/h1.html)
*   [h2](/html/h2.html)
*   [h3](/html/h3.html)
*   [h4](/html/h4.html)
*   [h5](/html/h5.html)
*   [h6](/html/h6.html)
*   [header](/html/header.html)
*   [hgroup](/html/hgroup.html)
*   [hr](/html/hr.html)
*   [noscript](/html/noscript.html)
*   [ol](/html/ol.html)
*   [output](/html/output.html)
*   [p](/html/p.html)
*   [pre](/html/pre.html)
*   [section](/html/section.html)
*   [table](/html/table.html)
*   [tfoot](/html/tfoot.html)
*   [ul](/html/ul.html)
*   [video](/html/video.html)

다음은 HTML5의 인라인 요소 목록입니다:

*   [a](/html/a.html)
*   [abbr](/html/abbr.html)
*   [acronym](/html/acronym.html)
*   [b](/html/b.html)
*   [bdo](/html/bdo.html)
*   [big](/html/big.html)
*   [br](/html/br.html)
*   [button](/html/button.html)
*   [cite](/html/cite.html)
*   [code](/html/code.html)
*   [dfn](/html/dfn.html)
*   [em](/html/em.html)
*   [i](/html/i.html)
*   [img](/html/img.html)
*   [input](/html/input.html)
*   [kbd](/html/kbd.html)
*   [label](/html/label.html)
*   [map](/html/map.html)
*   [object](/html/object.html)
*   [q](/html/q.html)
*   [samp](/html/samp.html)
*   [small](/html/small.html)
*   [script](/html/script.html)
*   [select](/html/select.html)
*   [span](/html/span.html)
*   [strong](/html/strong.html)
*   [sub](/html/sub.html)
*   [sup](/html/sup.html)
*   [textarea](/html/textarea.html)
*   [tt](/html/tt.html)
*   [var](/html/var.html)

