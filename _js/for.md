---
title: for 문
---
``for`` 문은 동일한 코드를 여러번 반복하여 수행할 때 사용하며 형식은 다음과 같습니다:

{% highlight javascript %}
for(초기명령; 조건; 마지막명령) {
    문장1;
    문장2;
    ...
    문장n;
}
{% endhighlight %}

위 형식으로 적으면 아래와 같이 실행됩니다:

1.  "초기명령"을 1회 실행
2.  "조건"이 참인 동안 문장1, 문장2, ... 을 순서대로 실행
3.  "마지막명령"을 실행
4.  다시 2번부터 반복

"초기명령"은 처음에 한 번만 실행되지만 "마지막명령"은 매 반복마다 실행된다는 점에 유의하세요.

예를 들어 아래 코드는 너비와 높이가 각각 10px인 사각형을 20px 간격으로 다섯개 그립니다:

{% highlight javascript %}
for(var i = 0; i < 100; i = i + 20) {
    rect(i, i, 10, 10);
}
{% endhighlight %}

``@pp processing``

위 코드를 ``for`` 문 없이 다시 쓰면 아래와 같습니다:

{% highlight javascript %}
var i = 0;

rect(i, i, 10, 10);
i = i + 20;
rect(i, i, 10, 10);
i = i + 20;
rect(i, i, 10, 10);
i = i + 20;
rect(i, i, 10, 10);
i = i + 20;
rect(i, i, 10, 10);
i = i + 20;
{% endhighlight %}

``@pp processing``

반복 횟수가 다섯번이라는 사실을 좀 더 명시적으로 나타내고 싶으면 아래와 같이 변경할 수 있습니다:

{% highlight javascript %}
for(var i = 0; i < 5; i = i + 1) {
    rect(i * 20, i * 20, 10, 10);
}
{% endhighlight %}

``@pp processing``

``for`` 문 안에 또다른 ``for`` 문을 겹쳐서 사용하면 좀 더 재미있는 효과를 낼 수 있습니다:

{% highlight javascript %}
for(var i = 0; i < 2; i = i + 1) {
    for(var j = 0; j < 3; j = j + 1) {
        rect(i * 20, j * 20, 10, 10);
    }
}
{% endhighlight %}

``@pp processing``

위 코드를 ``for`` 문 없이 다시 쓰면 아래와 같습니다:

{% highlight javascript %}
var i = 0;

var j = 0;
rect(i * 20, j * 20, 10, 10);
j = j + 1;
rect(i * 20, j * 20, 10, 10);
j = j + 1;
rect(i * 20, j * 20, 10, 10);
j = j + 1;
i = i + 1;

var j = 0;
rect(i * 20, j * 20, 10, 10);
j = j + 1;
rect(i * 20, j * 20, 10, 10);
j = j + 1;
rect(i * 20, j * 20, 10, 10);
j = j + 1;
i = i + 1;
{% endhighlight %}

``@pp processing``

``for`` 문 이외에 [while 문](/js/while.html)을 써도 동일한 기능을 수행할 수 있습니다.
