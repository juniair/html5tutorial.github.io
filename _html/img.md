---
title: img
---
img [요소](/docs/HTML_Element.html)는 "Image"의 약자이며, 웹 문서에 사진이나 그림을 삽입하기 위해 사용됩니다.

예를 들어 다음 [URL](/docs/URL.html)은 Tim Berners-Lee의 이미지 파일의 위치입니다:

[http://www.w3.org/Press/Stock/Berners-Lee/2001-europaeum-eighth.jpg](http://www.w3.org/Press/Stock/Berners-Lee/2001-europaeum-eighth.jpg)

다음과 같이 img 태그를 사용하면 문서 내에 이미지를 넣을 수 있습니다:

{% highlight html %}
<p>
    월드 와이드 웹의 창시자
    <img src="http://www.w3.org/Press/Stock/Berners-Lee/2001-europaeum-eighth.jpg" alt="Tim Berners-Lee">
</p>
{% endhighlight %}

위 HTML은 브라우저에서 아래와 같이 표현됩니다:

``@pp run``

``img`` 태그에서 가장 중요한 두 가지 속성은 ``src``와 ``alt``입니다:

*   ``src`` 속성에는 이미지 파일의 [URL](/docs/URL.html)을 적습니다.
*   ``alt`` 속성에는 이미지 파일에 대한 대체 문자열을 적습니다. 대체 문자열은 이미지를 표현할 수 없는 경우에 이미지 대신 사용될 문자열을 말합니다. 예를 들어 시각장애인용 웹 브라우저는 HTML 문서를 화면에 표시하는 대신 음성으로 읽어주는데, 이 때 ``alt`` 속성에 명시된 문자열이 활용됩니다.

속성을 적는 문법이 생소하다면 [HTML 문법](/docs/HTML_syntax.html)을 참고하세요.
