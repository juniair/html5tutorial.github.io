---
title: CSS 단위들
---

폰트의 크기, 여백의 크기, 테두리의 두께, 각 요소의 너비나 높이 등 CSS에서 시각적인 크기를
지정할 때 픽셀 단위 뿐 아니라 다양한 단위를 사용할 수 있습니다.


# 픽셀 단위

가장 이해하기 쉬운 단위는 픽셀 단위이며, ``px``로 표기합니다.


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

[Box model]을 시각화하면 아래와 같습니다:

``@pp run``

``@pp boxmodel``


# % 단위

...
