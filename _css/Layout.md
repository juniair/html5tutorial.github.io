---
title: 레이아웃
---

CSS를 이용하여 문서의 전체적인 레이아웃을 설정하는 다양한 방법들을 소개합니다.


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


# 측면 메뉴

(...작성중...)
