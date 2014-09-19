---
title: 블럭 요소와 인라인 요소
---

HTML 요소는 크게 **블럭 요소(block element 또는 block-level element)**와 **인라인 요소(inline element)**로 나눌 수 있습니다.


# 블럭 요소

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


# 인라인 요소

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

>   이제 <a href="http://www.google.com">이 링크를 클릭하여 <strong>구글</strong>로 이동</a> 합시다.
