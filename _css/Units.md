---
title: CSS 단위들
---

폰트의 크기, 여백의 크기, 테두리의 두께, 각 요소의 너비나 높이 등 CSS에서 시각적인 크기를
지정할 때 픽셀 단위 뿐 아니라 다양한 단위를 사용할 수 있습니다.


# 픽셀 단위

가장 이해하기 쉬운 단위는 픽셀 단위이며, ``px``로 표기합니다.

{% highlight css %}
div {
    width: 300px;
    background-color: #CCF;
}
p {
    width: 100px;
    margin-left: 50px;
    background-color: #AAF;
}
{% endhighlight %}

{% highlight html %}
<div>
    <p>px 단위</p>
</div>
{% endhighlight %}

``@pp run``


# em 단위

CSS에서 em 단위는 현재 요소의 폰트 크기와 동일합니다. 예를 들어 폰트의 크기가 ``16px``인
요소에서 ``2em``은 ``32px``과 같습니다. 따라서 아래 예시에서 [p 요소](/html/p.html)의 ``padding``은 ``32px`` 크기를 갖습니다:

{% highlight css %}
p {
  font-size: 16px;
  padding: 2em;
  border: 1px solid black;
}
{% endhighlight %}

{% highlight html %}
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
{% endhighlight %}

``@pp run``

[Box model](/css/Box_model.html)을 시각화하면 아래와 같습니다:

``@pp run``

``@pp boxmodel``

해당 요소에 ``font-size``가 정의되어 있지 않다면 상위 요소로부터 상속된 ``font-size`` 값이 사용됩니다.

예를 들어 아래 예시에서 [strong 요소](/html/strong.html)의 ``font-size``가 명시적으로 지정되지 않았는데 ``padding-left`` 및
``padding-right`` 값을 ``em`` 단위로 지정하고 있습니다. ``p.first``의 ``font-size``는 ``14px``이므로 ``p.first``에 속한
``strong``의 좌/우 패딩은 ``14px``이 됩니다.

한편, ``p.second``의 ``font-size``는 ``20px``이므로, ``p.second``에 속한 ``strong``의 좌/우 패딩은 ``20px``이 됩니다.

{% highlight css %}
.first {
  font-size: 14px;
}
.second {
  font-size: 20px;
}
strong {
  padding-left: 1em;
  padding-right: 1em;
}
{% endhighlight %}

{% highlight html %}
<p class="first">
  CSS에서 em 단위는 <strong>현재 요소의 폰트 크기</strong>와 동일합니다.
</p>
<p class="second">
  CSS에서 em 단위는 <strong>현재 요소의 폰트 크기</strong>와 동일합니다.
</p>
{% endhighlight %}

``@pp run``

[Box model](/css/Box_model.html)을 시각화하면 아래와 같습니다:

``@pp run``

``@pp boxmodel``



# % 단위

``%`` 단위로 지정된 속성 값은 다른 속성 값에 대한 상대적 비율로 정해집니다. ``%`` 단위의 값이 어떻게 계산되는지는 CSS 속성에 따라 다릅니다.

예를 들어 ``width``의 값을 ``%``로 지정하면, 상위 요소의 ``width``에 대한 상대값으로 해석됩니다. 상위 요소가 ``300px``이고, 하위 요소가
``50%``라면 해당 하위 요소의 ``width``는 ``150px``로 표현됩니다:

{% highlight css %}
div {
    width: 300px;
    background-color: #CCF;
}
p {
    width: 50%;
    background-color: #AAF;
}
{% endhighlight %}

{% highlight html %}
<div>
    <p>상위 요소의 50%</p>
</div>
{% endhighlight %}

``@pp run``

``%`` 단위를 잘 활용하면 화면 크기에 맞춰 크기가 변하는 레이아웃을 쉽게 표현할 수 있습니다. 예를 들어 아래 예시에서 파란색 상자는 부모 요소의 크기에
맞게 자동으로 늘어나거나 줄어듭니다:

{% highlight css %}
.box {
    float: left;
    width: 32%;
    height: 50px;
    margin: 5px 1px;
    background-color: #CCF;
}
.wide {
    width: 300px;
}
.narrow {
    width: 200px;
}
{% endhighlight %}

{% highlight html %}
<div class="wide">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</div>
<div class="narrow">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</div>
{% endhighlight %}

``@pp run``
