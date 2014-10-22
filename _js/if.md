---
title: if 문
---
``if`` 문은 조건에 따라 서로 다른 코드를 수행할 때 사용하며 형식은 다음과 같습니다:

{% highlight javascript %}
if (조건) {
    문장1;
    문장2;
} else {
    문장3;
    문장4;
}
{% endhighlight %}

"조건"이 참이면 "문장1"과 "문장2"가 실행되고, 그렇지 않으면 "문장3"과 "문장4"가 실행됩니다.

예를 들어 아래 변수 ``x``의 값이 5보다 크면 빨간색 사각형을 그리고, 그렇지 않으면 파란색 사각형을 그립니다:

{% highlight javascript %}
var x = 6;

if (x > 5) {
    // 채우기색을 빨간색으로 변경
    fill(255, 0, 0);
} else {
    // 채우기색을 파란색으로 변경
    fill(0, 0, 255);
}

rect(10, 10, 50, 30);
{% endhighlight %}

``@pp processing``

[for 문](/js/for.html)과 결합하면 아래와 같이 재미있는 그림을 그릴 수 있습니다:

{% highlight javascript %}
for(var i = 0; i < 100; i = i + 5) {
    if(i < 50) {
        // 네번짜값(50)은 투명도를 뜻합니다. 0은 완전 투명, 255는 완전 불투명
        fill(255, 0, 0, 50);
    } else {
        fill(0, 0, 255, 50);
    }
    rect(i, i, 20, 20);
}
{% endhighlight %}

``@pp processing``
