---
title: 레이아웃
---

CSS를 이용하여 문서의 전체적인 레이아웃을 설정하는 다양한 방법들을 소개합니다.

{:toc}

{{ content | toc_generate }}


# 상자를 중앙에 배치하기

블럭 요소는 기본적으로 화면 크기만큼의 너비를 가지지만 ``width`` 속성을 지정하여 너비를 제약할 수 있습니다:

{% highlight css %}
div {
    width: 150px;
}
{% endhighlight %}

{% highlight html %}
<div>
    <h1>Title</h1>
    <p>
        블럭 요소는 기본적으로 화면 크기만큼의 너비를 가지지만
        width 속성을 지정하여 너비를 제약할 수 있습니다.
    </p>
</div>
{% endhighlight %}

``@pp run``

이 상자를 중앙에 배치하려면 상자의 좌/우 마진을 ``auto``로 설정하면 됩니다:

{% highlight css %}
div {
    width: 150px;
    margin-left: auto;
    margin-right: auto;
}
{% endhighlight %}

{% highlight html %}
<div>
    <h1>Title</h1>
    <p>
        블럭 요소는 기본적으로 화면 크기만큼의 너비를 가지지만
        width 속성을 지정하여 너비를 제약할 수 있습니다.
    </p>
</div>
{% endhighlight %}

``@pp run``

이 방식은 상자 자체를 중앙에 정렬하는 것으로, 상자 안에 담긴 텍스트를 중앙 정렬하는 ``text-align``과는 다르다는 점에 유의하세요. 위 문서에서는 상자가
중앙에 정렬되어 있으나 그 안에 담긴 텍스트는 좌측 정렬 되어 있습니다. 텍스트를 중앙 정렬하려면 ``text-align``을 지정합니다:

{% highlight css %}
div {
    width: 150px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
{% endhighlight %}

{% highlight html %}
<div>
    <h1>Title</h1>
    <p>
        블럭 요소는 기본적으로 화면 크기만큼의 너비를 가지지만
        width 속성을 지정하여 너비를 제약할 수 있습니다.
    </p>
</div>
{% endhighlight %}

``@pp run``


# 상자의 최대 너비 제약하기

``max-width`` 속성을 쓰면 상자의 "최대 너비"를 제약할 수 있습니다.

{% highlight css %}
div {
    width: 100px;
    margin-left: auto;
    margin-right: auto;
    background-color: #EEE;
}
p {
    max-width: 120px;
    padding: 5px;
    background-color: #DDD;
}
{% endhighlight %}

{% highlight html %}
<div>
    <p>
        블럭 요소는 기본적으로 화면 크기만큼의 너비를 가지지만
        width 속성을 지정하여 너비를 제약할 수 있습니다.
    </p>
    <p>
        max-width 속성을 지정하면 요소의 "최대 너비"를
        제약할 수 있습니다.
    </p>
</div>
{% endhighlight %}

``@pp run``

위 예시에서는 [div 요소](/html/div.html)의 ``width``가 ``100px``로 지정되어 있기 때문에 그 안에 속해있는 [p 요소](/html/p.html)도 그만큼의
너비를 갖습니다. 하지만 ``p``의 ``max-width``가 ``120px``로 제약되어 있기 때문에 아래와 같이 ``div``의 ``width``를 ``180px``로 키우더라도
``p``는 ``120px`` 이상으로 커지지 않습니다:

{% highlight css %}
div {
    width: 180px;
    margin-left: auto;
    margin-right: auto;
    background-color: #EEE;
}
p {
    max-width: 120px;
    padding: 5px;
    background-color: #DDD;
}
{% endhighlight %}

{% highlight html %}
<div>
    <p>
        블럭 요소는 기본적으로 화면 크기만큼의 너비를 가지지만
        width 속성을 지정하여 너비를 제약할 수 있습니다.
    </p>
    <p>
        max-width 속성을 지정하면 요소의 "최대 너비"를
        제약할 수 있습니다.
    </p>
</div>
{% endhighlight %}

``@pp run``


# 측면 메뉴

(...작성중...)
