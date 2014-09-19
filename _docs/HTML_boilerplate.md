---
title: HTML 문서 기본 구조
---

# HTML 뼈대

[HTML 개요](/docs/HTML.html)에서 봤던 실제 HTML 예시는 아래와 같습니다:

{% highlight html %}
<p>
  HTML은 <em>Hypertext Markup Language</em>의 약자입니다.
</p>
<p>
  하이퍼링크는 문서들이 서로 연결되어 있는 고리를 말하고,
  마크업 언어란 문서에 부가적인 정보를 표시(marking-up)
  하기 위해 고안된 표기 방식을 뜻합니다.
</p>
{% endhighlight %}

하지만 위 코드는 온전한 HTML 문서가 아닙니다. 온전한 HTML 문서는 아래와 같은 구조를 갖춰야 합니다:

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello</title>
  </head>
  <body>
    <p>Hello HTML5!</p>
  </body>
</html>
{% endhighlight %}


# DTD 선언

여러분이 작성하는 문서가 HTML임을 명시하기 위해서는 문서의 첫 줄에 아래와 같이 [DTD 선언](/docs/DTD_declaration.html)을 적어야 합니다. DTD란 문서 형식 정의(Document Type Definition)의 약어입니다:

{% highlight html %}
<!DOCTYPE html>
{% endhighlight %}

문법에 대한 상세한 설명은 [HTML 구조와 문법](/docs/HTML_syntax.html)을 참고하세요.


# 최상위 요소

DTD 선언 바로 다음부터 실제 HTML 마크업을 적습니다. 모든 HTML 문서는 하나의 [html 요소](/html/html.html)가 나와야 합니다. 따라서 다음과 같이 적습니다:

{% highlight html %}
<!DOCTYPE html>
<html>
</html>
{% endhighlight %}


# 머리와 몸

[html 요소](/html/html.html) 안에는 **문서의 머리와 몸통**이 담겨야 합니다. 각각 [head 요소](/html/head.html), [body 요소](/html/body.html)라고 부릅니다:

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
  </head>

  <body>
  </body>
</html>
{% endhighlight %}

[body 요소](/html/body.html)에는 실제 문서가 담기고, [head 요소](/html/head.html)에는 문서에 대해 설명하는 정보들이 담깁니다.


# head 요소

[head 요소](/html/head.html) 안에 담기는 요소 중 가장 중요한 두 가지는 문서의 문자셋(character set)을 지정하는 정보와 문서의 제목을 나타내는 정보입니다:

{% highlight html %}
<head>
  <meta charset="utf-8">
  <title>Hello</title>
</head>
{% endhighlight %}

``<meta charset="utf-8">`` 요소는 이 문서가 ``utf-8``이라는 문자셋으로 저장되어 있음을 나타냅니다. 문자셋이란 컴퓨터가 글자(한글, 영문 등)를 저장하는 방식을 나타내는데, ``utf-8``은 그 중에서도 다국어로 작성된 문서를 저장할 때 가장 널리 쓰이는 방식입니다.

``<title>Hello</title>`` 요소는 이 문서의 제목이 "Hello"임을 명시합니다. 대부분의 [웹 브라우저](/docs/Web browsers.html)는 이 정보를 브라우저의 탭 혹은 브라우저 창의 제목표시줄에 나타냅니다.

``<meta>`` 요소는 지금까지 봤던 다른 요소와 차이점이 있습니다. 문법에 대한 더 자세한 설명을 읽으려면 [HTML 문법](/docs/html_syntax.html) 문서를 참고하세요. 궁금하지 않다면 지금 읽지 않아도 괜찮습니다.


# body 요소

[body 요소](/html/body.html)에는 문서의 본문이 담깁니다. 예를 들어 두 개의 [단락(**p**aragraph)](/html/p.html)으로 구성된 본문은 아래와 같이 적을 수 있습니다:

{% highlight html %}
<body>
  <p>첫 번째 단락.</p>
  <p>두 번째 단락.</p>
</body>
{% endhighlight %}

위 문서는 브라우저에서 아래와 같이 표시됩니다:

>   첫 번째 단락.
>
>   두 번째 단락.


# 종합 및 복습

지금까지 설명한 HTML 조각들을 모두 합쳐서 보면 다음과 같습니다:

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello</title>
  </head>
  <body>
    <p>첫 번째 단락.</p>
    <p>두 번째 단락.</p>
  </body>
</html>
{% endhighlight %}

이 문서를 [준비물](/docs/Preparation.html)에서 배운 JS Bin에 적어 보세요. 복사해서 붙여넣기를 해도 되지만 기왕이면 직접 한글자씩 입력하는 것이 좋습니다.


# 다음 단계

*   [기본적인 HTML 태그들](/docs/Basic_HTML_tags.html)
