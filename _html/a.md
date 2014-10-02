---
title: a
html5ref: a
---
a [요소](/docs/HTML_Element.html)는 "Anchor"의 약자이며, 웹 문서에 다른 웹 문서나 인터넷 상의 다른 자원으로 연결되는 하이퍼링크(hyperlink)를 넣기 위해 사용합니다.

예를 들어 다음과 같이 a 태그를 사용하면 구글로 이동하는 링크를 문서 내에 삽입할 수 있습니다:

{% highlight html %}
<p>
    바로가기: <a href="http://www.google.com">구글</a>
</p>
{% endhighlight %}

위 HTML은 브라우저에서 아래와 같이 표현됩니다:

>   바로가기: [구글](http://www.google.com)

``href`` 속성은 "hyper reference"의 약자이며, 이곳에 이동할 대상의 [URL](/docs/URL.html)을 적습니다. ``href``에는 다양한 종류의 값을 넣을 수 있습니다:

일반 웹 문서는 ``http://...`` 혹은 ``https://...``로 링크를 걸 수 있습니다:

{% highlight html %}
<a href="http://www.google.com">구글</a>
{% endhighlight %}

전화번호는 ``tel:123-1234-1234`` 형식으로 적으며, 스마트폰 브라우저에서 클릭하면 전화를 걸 수 있습니다:

{% highlight html %}
<a href="tel:010-1234-1234">전화걸기</a>
{% endhighlight %}

메일 보내기 링크는 ``mailto:user@example.com`` 형식으로 적습니다. 클릭하면 이메일 클라이언트가 실행됩니다:

{% highlight html %}
<a href="mailto:hello@example.com">hello@example.com</a>
{% endhighlight %}

속성을 적는 문법이 생소하다면 [HTML 문법](/docs/HTML_syntax.html)을 참고하세요.
