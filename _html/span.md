---
title: span
---
span [요소](/docs/HTML_Element.html)는 특별한 의미가 없는 [인라인 요소](/docs/Block_and_inline_element.html)입니다. [strong 요소](/html/strong.html)나 [a 요소](/html/a.html)처럼 의미가 있는 인라인 요소를 사용하기 어려운 상황에만 제한적으로 됩니다.

span 요소와 유사하지만 인라인 요소가 아닌 [블럭 요소](/docs/Block_and_inline_element.html)가 필요한 경우에는 [div 요소](/html/div.html)를 사용합니다.

사용예는 아래와 같습니다:

{% highlight html %}
<h1>이순신 <span class="title">장군</span></h1>
<p>
    본인 스스로에게 엄격하고 청렴한 생활을 하고 깊은 효심을
    지닌 <strong>선비의 모범</strong>으로 평가된다. 탁월한 전략과 능수능란한
    전술로 일본 수군과의 해전에서 연전연승하여 나라를 구한
    성웅(聖雄)으로 추앙받고 있다.
</p>
{% endhighlight %}

위 예시에서 "선비의 모범"은 강한 강조를 의미하는 [strong 요소](/html/strong.html)로 마크업을 하였으나 [h1 요소](/html/h1.html) 내의 "장군" 부분은 "직업" 혹은 "직급" 등의 의미를 갖는 HTML 요소가 없기 때문에 특별한 의미가 없는 ``span``으로 마크업하였습니다.

위 HTML은 [CSS](/docs/CSS.html)를 사용하여 아래와 같이 꾸밀 수 있습니다:

{% highlight css %}
.title {
    font-size: smaller;
}
{% endhighlight %}

위 CSS를 적용하면 사용하면 "이순신 장군" 중 "장군" 부분은 좀 더 작은 글꼴로 표현됩니다.

``div``나 ``span``을 지차니게 남발하면 HTML 본연의 의미가 훼손되므로(HTML은 문서에 **의미**를 마크업하기 위한 언어입니다), 의미 있는 요소를 찾을 수 없는 경우에만 제한적으로 사용해야 합니다.
