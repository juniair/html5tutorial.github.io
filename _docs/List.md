---
title: HTML 목록 요소들
---
HTML에서 가장 빈번하게 쓰이는 목록 요소는 [ul 요소](/html/ul.html)와 [ol 요소](/html/ol.html)가 있습니다. 각각 Unordered list, Ordered list의 약자이며, 순서가 중요하지 않은 목록과 순서가 중요한 목록을 나타내기 위해 사용합니다.

예를 들면 선호도와 무관하게(즉, 순서없이) 나와 친한 친구들을 나열하고자 하면 ``ul``을 씁니다. 반면, 내가 가장 좋아하는 음식을 순서대로 세 개 꼽는다거나 등수(rank)를 표현하고자 하면 ``ol``을 씁니다.

다음은 홍길동과 이몽룡을 등수에 따라 나열하는 마크업입니다. 순서가 있으므로 ``ol``을 사용하였습니다:

{% highlight html %}
<p>등수</p>
<ol>
    <li>홍길동</li>
    <li>이몽룡</li>
</ol>
{% endhighlight %}

``@pp run``

``ol``과 ``ul`` 요소의 하위에는 반드시 [li 요소](/html/li.html)가 나옵니다. 그 이외의 요소가 들어가면 [유효한 HTML 문서](/docs/Validation.html)가 아닙니다. ``li``는 "List item"의 약자로 목록의 각 항목을 뜻합니다.


# 목록 안에 다른 요소들을 나타내기

``li`` 안에는 [p 요소](/html/p.html), [h1 요소](/html/h1.html) 등 다양한 요소가 담길 수 있습니다. 예를 들면 아래와 같이 사용할 수 있습니다:

{% highlight html %}
<h1>등수</h1>
<ol>
    <li>
        <h2>홍길동</h2>
        <p>홍길동은 지각/결석이 없고 모든 과제에서 만점을 받았음</p>
    </li>
    <li>
        <h2>이몽룡</h2>
        <p>이몽룡은 모든 과제에서 만점을 받았으나 지각 2회를 하였기에 2등</p>
    </li>
</ol>
{% endhighlight %}

``@pp run``

위 문서의 논리적 구조는 아래와 같습니다.

``@pp dom``


# 중첨된 목록

아래와 같이 ``li`` 안에 ``ol`` 또는 ``ul``을 넣어서 중첩된 목록을 표현할 수도 있습니다.

{% highlight html %}
<h1>등수</h1>
<ol>
    <li>
        <h2>홍길동</h2>
        <ul>
            <li>지각 없음</li>
            <li>결석 없음</li>
            <li>과제 만점</li>
        </ul>
    </li>
    <li>
        <h2>이몽룡</h2>
        <ul>
            <li>지각 2회</li>
            <li>결석 없음</li>
            <li>과제 만점</li>
        </ul>
    </li>
</ol>
{% endhighlight %}

``@pp run``

위 문서의 논리적 구조는 아래와 같습니다.

``@pp dom``
