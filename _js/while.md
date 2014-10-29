---
title: while 문
---
``while`` 문은 동일한 코드를 여러번 반복하여 수행할 때 사용하며 형식은 다음과 같습니다:

{% highlight javascript %}
while(조건) {
    문장1;
    문장2;
    ...
    문장n;
}
{% endhighlight %}

예를 들어 아래 코드는 너비와 높이가 각각 10px인 사각형을 20px 간격으로 다섯개 그립니다:

{% highlight javascript %}
var i = 0;

while(i < 100) {
    rect(i, i, 10, 10);
    i = i + 20;
}
{% endhighlight %}

``@pp processing``

위 코드를 ``while`` 문 없이 다시 쓰면 아래와 같습니다:

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
var i = 0;

while(i < 5) {
    rect(i * 20, i * 20, 10, 10);
    i = i + 1;
}
{% endhighlight %}

``@pp processing``

``while`` 문 이외에 [for 문](/js/for.html)을 써도 동일한 기능을 수행할 수 있습니다.
