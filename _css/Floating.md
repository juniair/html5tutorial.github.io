---
title: Floating
---

CSS ``float`` 속성을 적용하면 특정 요소를 원래의 흐름에서 분리시켜 해당 요소를 담고 있는 상자의 좌측 혹은 우측으로 붙일 수 있습니다. ``float`` 속성이
적용된 요소의 주변에 있는 인라인 요소들은 해당 요소 주변으로 자연스럽게 흐르게 됩니다.

다음 예시는 ``float``이 적용되지 않은 [img 요소](/html/img.html])가 [p 요소](/html/p.html)에 담겨있는 모습입니다:

{% highlight css %}
.target {
    margin: 5px;
    width: 80px;
    height: 50px;
}
p {
    margin: 10px;    
}
{% endhighlight %}

{% highlight html %}

<p>
    <img class="target" src="http://www.w3.org/Press/Stock/Berners-Lee/2001-europaeum-eighth.jpg" alt="Tim Berners-Lee">

    CSS <strong>float</strong> 속성을 적용하면 특정 요소를 원래의
    흐름에서 분리시켜 해당 요소를 담고 있는 상자의 좌측 혹은 우측으로
    붙일 수 있습니다. <strong>float</strong> 속성이 적용된 요소의
    주변에 있는 인라인 요소들은 해당 요소 주변으로 자연스럽게 흐르게
    됩니다. 이미지를 본문 중에 자연스럽게 배치하거나 화면 측면에 네비게이션
    메뉴 등을 배치할 때 사용할 수 있습니다.
</p>
{% endhighlight %}

``@pp run``

[Box model](/css/Box_model.html)을 시각화하면 아래와 같습니다:

``@pp run``

``@pp boxmodel``

하지만 ``img`` 요소에 ``float``을 적용하면 아래와 같이 변합니다:

{% highlight css %}
.target {
    margin: 5px;
    width: 80px;
    height: 50px;
    float: left;
}
p {
    margin: 10px;    
}
{% endhighlight %}

{% highlight html %}

<p>
    <img class="target" src="http://www.w3.org/Press/Stock/Berners-Lee/2001-europaeum-eighth.jpg" alt="Tim Berners-Lee">

    CSS <strong>float</strong> 속성을 적용하면 특정 요소를 원래의
    흐름에서 분리시켜 해당 요소를 담고 있는 상자의 좌측 혹은 우측으로
    붙일 수 있습니다. <strong>float</strong> 속성이 적용된 요소의
    주변에 있는 인라인 요소들은 해당 요소 주변으로 자연스럽게 흐르게
    됩니다. 이미지를 본문 중에 자연스럽게 배치하거나 화면 측면에 네비게이션
    메뉴 등을 배치할 때 사용할 수 있습니다.
</p>
{% endhighlight %}

``@pp run``

위의 box model을 시각화하면 아래와 같습니다:

``@pp run``

``@pp boxmodel``

``float`` 속성의 값을 ``right``로 지정하면 아래와 같이 표현할 수 있습니다:

{% highlight css %}
.target {
    margin: 5px;
    width: 80px;
    height: 50px;
    float: right;
}
p {
    margin: 10px;    
}
{% endhighlight %}

{% highlight html %}

<p>
    <img class="target" src="http://www.w3.org/Press/Stock/Berners-Lee/2001-europaeum-eighth.jpg" alt="Tim Berners-Lee">

    CSS <strong>float</strong> 속성을 적용하면 특정 요소를 원래의
    흐름에서 분리시켜 해당 요소를 담고 있는 상자의 좌측 혹은 우측으로
    붙일 수 있습니다. <strong>float</strong> 속성이 적용된 요소의
    주변에 있는 인라인 요소들은 해당 요소 주변으로 자연스럽게 흐르게
    됩니다. 이미지를 본문 중에 자연스럽게 배치하거나 화면 측면에 네비게이션
    메뉴 등을 배치할 때 사용할 수 있습니다.
</p>
{% endhighlight %}

``@pp run``


## Floating 요소를 포함하는 상자

``float`` 요소가 적용된 상자는 해당 요소를 포함하는 상자의 크기에 영향을 주지 않습니다. 해당 요소는 아래와 같이 상자 간 경계를 벗어날 수 있습니다.

{% highlight css %}
.target {
    margin: 5px;
    width: 90px;
    height: 70px;
    float: right;
}
p {
    margin: 10px;    
}
{% endhighlight %}

{% highlight html %}

<p>
    <img class="target" src="http://www.w3.org/Press/Stock/Berners-Lee/2001-europaeum-eighth.jpg" alt="Tim Berners-Lee">

    CSS <strong>float</strong> 속성을 적용하면 특정 요소를 원래의
    흐름에서 분리시켜 해당 요소를 담고 있는 상자의 좌측 혹은 우측으로
    붙일 수 있습니다.
</p>
<p>
    <strong>float</strong> 속성이 적용된 요소의 주변에 있는 인라인
    요소들은 해당 요소 주변으로 자연스럽게 흐르게 됩니다. 이미지를 본문
    중에 자연스럽게 배치하거나 화면 측면에 네비게이션 메뉴 등을 배치할 때
    사용할 수 있습니다.
</p>
{% endhighlight %}

``@pp run``

위의 box model을 시각화하면 아래와 같습니다:

``@pp run``

``@pp boxmodel``
