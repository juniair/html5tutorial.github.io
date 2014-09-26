---
title: CSS 선택자
---

[CSS](/docs/CSS.html)를 이용하여 문서의 특정 요소에 스타일을 지정하려면, 아래와 같이 문서의 요소를 지정할 수 있는 다양한 방법이 필요합니다:

*   **문서 내 모든 제목과 소제목**의 위/아래 여백을 30px로 지정
*   **문서 내 모든 단락**의 줄간격을 글자 크기의 1.5배로 지정
*   **첫 단락**은 모두 대문자로 표기
 
위 예시에서 강조된 부분을 CSS 선택자(selector)라고 부릅니다. 위 문장을 CSS 문법에 맞게 표현하면 다음과 같습니다:

{% highlight css %}
/* 문서 내의 모든 제목과 소제목의 위/아래 여백을 30px로 지정 */
h1, h2, h3, h4, h5, h6 {
    margin-top: 30px;
    margin-bottom: 30px;
}

/* 문서 내 모든 단락의 줄간격을 글자 크기의 1.5배로 지정 */
p {
    line-height: 1.5;
}

/* 첫 단락은 모두 대문자로 표기 */
p:first-child {
    text-transform: uppercase;
}
{% endhighlight %}


문서를 원하는 형태로 꾸미려면 CSS 선택자의 종류와 사용법을 잘 이해해야 합니다.

다음은 주로 사용되는 선택자들입니다. 단, 이 문서를 더 읽기 전에 [CSS 기본 문법](/docs/CSS.html)을 숙지하여야 합니다.


# 요소 선택자 (Element selector)

[p 요소](/html/p.html), [a 요소](/html/a.html) 등 HTML 요소의 이름을 기준으로 스타일을 지정하고 싶을 때 사용합니다. 다음 CSS 코드는 ``h1``
요소의 폰트 크기를 18 픽셀로 지정하고 ``p`` 요소의 폰트 크기를 12 픽셀, 색상을 빨간색으로 지정합니다:

{% highlight css %}
h1 {
    font-size: 18px;
}

p {
    font-size: 12px;
    color: red;
}
{% endhighlight %}


{% highlight html %}
<h1>CSS 소개</h1>
<p>
    CSS는 Cascading Stylesheet의 약자이며 HTML 같은
    마크업 언어로 작성된 문서를 꾸미기 위해 사용합니다.
</p>
<p>
    HTML 문서의 head 요소 안에 style 요소를 넣고 CSS
    코드를 적으면 해당 문서를 다양하게 꾸밀 수 있습니다.
</p>
{% endhighlight %}

``@pp run``


# 클래스 선택자 (Class selector)

HTML 요소에 부여된 ``class`` 값을 기준으로 스타일을 지정하고 싶을 때는 ``.클래스이름`` 형식의 클래스 선택자를 사용합니다. 다음 CSS 코드는
``value`` 클래스는 파란색, ``keyword`` 클래스는 녹색으로 지정합니다. 한편, 직전에 설명한 요소 선택자를 이용하여 모든 [code 요소](/html/code.html)
에 안쪽 여백(padding)과 테두리(border)를 지정하였습니다:

{% highlight css %}
.value {
    color: blue;
}
.keyword {
    color: green;
}
code {
    padding: 2px 10px 2px 10px;
    border: 1px solid gray;
}
{% endhighlight %}

{% highlight html %}
<p>
    <code class="keyword">color</code>의 값은
    <code class="value">green</code> 입니다.
</p>
{% endhighlight %}

``@pp run``


# 요소 간 관계에 기반한 선택자

후손, 자식, 부모 등의 용어에 익숙하지 않으면 [HTML DOM](/docs/DOM.html) 문서의 내용을 먼저 살펴보아야 합니다.

## 후손

[ul 요소](/html/ul.html) 하위에 있는 [li 요소](/html/li.html)에만 스타일을 지정하려면 ``ul li``라고 적습니다. 이는 ``ul``의 모든 후손 중
``li``만을 선택한다는 의미입니다.

{% highlight css %}
ul li {
    border: 1px solid black;
}
{% endhighlight %}

{% highlight html %}
<ul>
    <li>
        A
        <ol>
            <li>A1</li>
            <li>A2</li>
        </ol>
    </li>
    <li>B</li>
</ul>

<ol>
    <li>C</li>
    <li>D</li>
</ol>
{% endhighlight %}

``@pp run``

위 예시에서 ``ul``의 후손인 ``li``에는 테두리가 적용되었지만 그렇지 않은 경우에는 테두리가 적용되지 않은 것을 확인할 수 있습니다. A1과 A2는
부모가 ``ol``이지만, 조상 중에 ``ul``이 있기 때문에 테두리가 적용되었다는 점에 주목하세요.


## 자식

모든 후손이 아니라 직계 자식들에만 스타일을 지정하려면 ``ul > li``와 같이 ``>`` 기호를 추가하여 적습니다. 위 예시와 동일한 코드에서 ``ul li``만
``ul > li``로 바꾸면 결과가 아래와 같이 달라집니다.

{% highlight css %}
ul > li {
    border: 1px solid black;
}
{% endhighlight %}

{% highlight html %}
<ul>
    <li>
        A
        <ol>
            <li>A1</li>
            <li>A2</li>
        </ol>
    </li>
    <li>B</li>
</ul>

<ol>
    <li>C</li>
    <li>D</li>
</ol>
{% endhighlight %}

``@pp run``

모든 후손을 선택했을 때와 달리 A1과 A2에 테두리가 적용되지 않았습니다.


# 여러 선택자를 조합하기

위에서 살펴본 선택자는 다양하게 조합하여 사용할 수 있습니다. 예를 들어 ``ul > li.alcohol``와 같이 쓰면  ``ul``의 자식 중 ``li``이면서
``alcohol`` 클래스가 부여된 요소만 선택할 수 있습니다.

{% highlight css %}
ul > li.alcohol {
    font-weight: bold;
    color: red;
}
{% endhighlight %}

{% highlight html %}
<ul>
    <li>Coke</li>
    <li class="alcohol">Beer</li>
    <li>Coffee</li>
</ul>
{% endhighlight %}

``@pp run``

단 빈 칸의 사용에 주의하세요:

*   ``li.alcohol``은 ``li`` **이면서** ``alcohol`` 클래스가 부여된 요소를 선택한다는 의미입니다.
*   ``li .alcohol``은 ``li``의 **후손 중에서** ``alcohol`` 클래스가 부여된 요소를 선택한다는 의미입니다.
