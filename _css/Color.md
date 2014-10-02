---
title: 색상 지정하기
---

CSS를 이용하면 폰트 색상(``color``), 배경 색상(``background-color``), 테두리 색상(``border-color``) 등을 자유롭게
지정할 수 있습니다.


# 색상 단어 사용하기

가장 직관적인 방법은 미리 정의되어 있는 색상 단어를 사용하는 것입니다. 다음 예시를 참고하세요:

{% highlight css %}
p {
  border: 3px solid red;
  background-color: black;
  color: white;
}
{% endhighlight %}

{% highlight html %}
<p>
   빨간 테두리, 검은 배경, 흰 글씨
</p>
{% endhighlight %}

``@pp run``

위 예시에서 테두리는 ``red``, 배경색은 ``black``, 글자색은 ``white`` 등으로 지정하였습니다. 이 방식은 직관적이고 배우기 쉽지만 색상 단어의 종류가 제한되어 있어서 원하는 색상을 마음대로 쓸 수 없다는 단점이 있습니다.


# RGB

빛의 삼원색(빨강, 녹색, 파랑 = Red, Green, Blue = RGB)을 원하는 비율로 조합하여 지정하는 방식을 사용하면 색상을 더 정밀하게 지정할 수 있습니다.

{% highlight css %}
p {
  border: 3px solid rgb(255, 100, 100);
  background-color: rgb(255, 200, 200);
  color: rgb(200, 50, 50);
}
{% endhighlight %}

{% highlight html %}
<p>
   미묘한 붉은색들
</p>
{% endhighlight %}

``@pp run``

위 문법에서는 ``red``, ``black``과 같은 색상 단어 대신 빨강, 녹색, 파랑 값을 각각 ``0``에서 ``255`` 사이로 지정한 값을
사용하고 있습니다. ``0``은 빛이 없음을 의미하고 ``255``는 빛이 가장 강함을 의미합니다. 예를 들어 ``rgb(255, 127, 0)``은 빨간빛이 가장 강하고, 녹색빛이 중간 쯤이고, 파란빛이 전혀 없는 색상 조합을 뜻합니다. ``rgb(0,0,0)``은 아무 빛도 없으므로 검정색, ``rgb(255,255,255)``는 모든 빛이 가장 밝으므로 흰색을 나타냅니다.


# RGBA

``rgba`` 표기법을 이용하면 투명도를 지정할 수 있습니다. 투명도 값은 ``0``에서 ``1`` 사이의 실수로 지정하며 ``0``은 완전한 투명, ``1``은 완전한 불투명을 뜻합니다:

{% highlight css %}
body {
  background-color: green;
}
.first {
  background-color: rgba(255, 0, 0, 0.2);
}
.second {
  background-color: rgba(255, 0, 0, 0.8);
}
{% endhighlight %}

{% highlight html %}
<p class="first">단락 1</p>
<p class="second">단락 2</p>
{% endhighlight %}

``@pp run``
