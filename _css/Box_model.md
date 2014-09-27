---
title: Box model
---
HTML 문서의 각 요소들은 직사각형 모양의 상자에 담깁니다. [CSS](/docs/CSS.html)를 이용하면 각 상자의 크기, 테두리, 상사 사이의 간격 등을 자유롭게 표현할 수 있습니다.


## Box model 이란?

CSS에서는 box model이라는 개념을 이용하여 상자의 크기, 테두리, 여백 등을 표현합니다. Box model은 네 가지로 구성됩니다:

*   **margin**: 상자 바깥의 여백. 즉, 상자와 다른 상자 사이의 여백
*   **border**: 상자의 테두리
*   **padding**: 상자 안쪽의 여백. 즉, 상자의 테두리와 상자에 담긴 내용(content) 사이의 여백
*   **content**: 상자 안에 담긴 내용

예를 들어 단락([p 요소](/html/p.html))의 box model을 시각화하면 다음과 같습니다:

{% highlight css %}
p {
    margin: 10px;
    border: 5px solid tranparent;
    padding: 10px;
}
{% endhighlight %}

``@pp hide``

{% highlight html %}
<p>
    웹 디자인의 모든 요소는 직사각형 상자 형태입니다
</p>
{% endhighlight %}

``@pp run``

``@pp boxmodel``

위 그림에서 파란색이 ``content``, 녹색이 ``padding``, 노란색이 ``border``, 주황색이 ``margin`` 입니다.


## 스타일 적용하기

아래와 같이 CSS를 이용하여 ``margin``, ``padding``, ``border``를 각각 ``10px``, ``15px``, 5px로 지정하면 아래와 같이 표현됩니다.

{% highlight css %}
p {
    margin: 10px;
    padding: 15px;
    border: 5px dashed blue;
}
{% endhighlight %}

{% highlight html %}
<p>Hello</p>
{% endhighlight %}

``@pp run``

위 HTML의 box model을 시각화하면 아래와 같습니다:

{% highlight css %}
p {
    margin: 10px;
    padding: 15px;
    border: 5px dashed blue;
}
{% endhighlight %}

``@pp hide``

{% highlight html %}
<p>Hello</p>
{% endhighlight %}

``@pp run``

``@pp boxmodel``


## 상/하/좌/우에 서로 다른 스타일 적용하기

때로는 위/아래 여백과 좌/우 여백을 다른 크기로 지정해야 하는 경우가 있습니다. 이런 경우에는 아래와 같이 각 면이 숫자를 별도로 지정할 수 있습니다. 네 개의 숫자는 각각 상/우/하/좌 순서로 적용됩니다. **12시를 기준으로 시작하여 시계방향**으로 돌아간다고 생각하면 쉽게 외울 수 있습니다.

{% highlight css %}
p {
    padding: 10px 0px 10px 0px;
    margin: 0px;
}
{% endhighlight %}

{% highlight html %}
<p>Hello</p>
{% endhighlight %}

``@pp run``

``@pp boxmodel``

위 CSS는 상/하 여백은 가각 10px, 좌/우 여백은 각각 0px로 지정하고 있습니다.


## 인라인 요소

블럭 요소 뿐 아니라 인라인 요소도 직사각형 상태 형태를 갖습니다([블럭 요소와 인라인 요소란?](/docs/Block_and_inline_element.html)). 예를 들어 위 예시에 인라인 요소인 [strong 요소](/html/strong.html)를 넣어보면 아래와 같이 됩니다:

{% highlight css %}
p {
    margin: 10px;
    border: 5px solid transparent;
    padding: 10px;
}
{% endhighlight %}

{% highlight html %}
<p>
    웹 디자인의 모든 요소는 <strong>직사각형 상자 형태</strong>입니다.
</p>
{% endhighlight %}

``@pp run``

``@pp boxmodel``

위 그림에서 ``strong`` 요소는 ``margin``, ``border``, ``padding``의 크기가 0이기 때문에 파란색인 ``content`` 영역만 나타나는 것을 볼 수 있습니다.

``strong`` 요소에 ``padding``과 ``margin``을 추가하면 아래와 같이 변하는 것을 볼 수 있습니다:

{% highlight css %}
p {
    margin: 10px;
    border: 5px solid transparent;
    padding: 10px;
}
strong {
    margin: 10px;
    padding: 5px;
}
{% endhighlight %}

{% highlight html %}
<p>
    웹 디자인의 모든 요소는 <strong>직사각형 상자 형태</strong>입니다.
</p>
{% endhighlight %}

``@pp run``

``@pp boxmodel``

인라인 요소에 담긴 내용이 많아져서 줄바꿈이 일어나면 상자가 아래와 같은 모양을 띄게 됩니다:

{% highlight css %}
p {
    margin: 10px;
    border: 5px solid transparent;
    padding: 10px;
}
strong {
    margin: 10px;
    padding: 5px;
}
{% endhighlight %}

``@pp hide``

{% highlight html %}
<p>
    대단히 긴 내용의 인라인 상자는
    <strong>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do.
    </strong>
    이런 모양의 상자를 갖게 됩니다.
</p>
{% endhighlight %}

``@pp run``

``@pp boxmodel``


## 여백 겹침

바깥쪽 여백(``margin``)은 안쪽 여백(``padding``)이나 테두리(``border``)와 달리 특별한 성질이 있습니다. 인접한 블럭 요소들 사이의 여백은 **서로 겹쳐집니다**.

{% highlight css %}
p {
    padding: 10px 0px 10px 0px;
    margin: 10px;
}
{% endhighlight %}

{% highlight html %}
<p>Hello,</p>
<p>Good-bye.</p>
{% endhighlight %}

``@pp run``

``@pp boxmodel``

위 예시의 두 [p 요소](/docs/p.html) 사이의 여백은 20px 이어야 하지만(첫번째 p 요소의 아래쪽 여백과 두번째 p 요소의 위쪽 여백), 두 여백이 겹쳐지면서 여백이 10px로 줄었습니다. 그 이유는 "여백"이라는 말의 의미를 생각해보면 당연한데, 여백이 10px 이라는 것은 반드시 각 요소가 10px 씩의 영역을 확보해야 한다는 뜻이 아니라, 인접한 요소와의 사이에 빈 공간이 10px 이어야 한다는 의미이기 때문입니다.

여백 겹침에 대한 더 자세한 설명은 [여백 겹침](/css/Margin_collapsing.html) 문서를 참고하세요.
