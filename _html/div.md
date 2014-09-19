---
title: div
---
div [요소](/docs/HTML_Element.html)는 특별한 의미가 없는 [블럭 요소](/docs/Block_and_inline_element.html)입니다. [blockquote 요소](/html/blockquote.html)처럼 의미가 있는 블럭 요소를 사용하기 어려운 상황에만 제한적으로 됩니다.

div 요소와 유사하지만 블럭 요소가 아닌 [인라인 요소](/docs/Block_and_inline_element.html)가 필요한 경우에는 [span 요소](/html/span.html)를 사용합니다.

사용예는 아래와 같습니다:

{% highlight html %}
<div class="card">
    <p>한 동네에서 살았던 류성룡은 어린 시절 이순신을 다음과 같이 적고 있다.</p>
    <blockquote>
        <p>이순신은 어린 시절 영특하고 활달했다.</p>
        <p>다른 아이들과 모여 놀 때면 나무를 깎아 화살을 만들어 동리에서 전쟁놀이를 했다.</p>
    </blockquote>
</div>
{% endhighlight %}

위 예시에서 류성룡을 인용문은 인용을 의미하는 [blockquote 요소](/html/blockquote.html)로 마크업을 하였으나 전체를 아우르는 요소에 대해서는 의미를 갖는 HTML 요소를 찾기 어려워서 특별한 의미가 없는 ``div``로 마크업하였습니다.

``div``나 ``span``을 지차니게 남발하면 HTML 본연의 의미가 훼손되므로(HTML은 문서에 **의미**를 마크업하기 위한 언어입니다), 의미 있는 요소를 찾을 수 없는 경우에만 제한적으로 사용해야 합니다.
