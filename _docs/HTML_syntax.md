---
title: HTML 구조와 문법
---

# HTML 문서의 구조

HTML 문서는 여러 요소(element)들로 구성됩니다. 최상위 요소는 [html 요소](/html/html.html)이며 그 밑에는 [head 요소](/html/head.html)와 [body 요소](/html/body.html)가 나란히 나와야 합니다. 윈도 탐색기의 폴더와 유사하게 요소 안에 다른 요소가 겹쳐 있는 구조를 상상하시면 됩니다.

다음은 간단한 HTML 문서의 구조를 시각적으로 표현한 예시입니다:

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
     <meta charset="utf-8">
     <title>제목</title>
  </head>

  <body>
    <h1>제목</h1>
    <p>단락</p>
  </body>
</html>
{% endhighlight %}

``@pp dom``


# DTD 선언

사람들이 사용하는 일상 언어와 비슷하게 HTML에도 여러 종류의 사투리가 있습니다. 현재 가장 널리 쓰이는 사실상의 표준은 HTML5 입니다.

여러분이 작성하는 문서가 HTML5임을 명시하기 위해서는 HTML 문서의 첫 줄에 아래와 같이 [DTD 선언](/docs/DTD_declaration.html)을 적어야 합니다. DTD란 문서 형식 정의(Document Type Definition)의 약어입니다:

{% highlight html %}
<!DOCTYPE html>
{% endhighlight %}

다른 종류의 DTD 선언을 적거나 DTD 선언을 적지 않으면 HTML5가 아닌 다른 버전의 HTML로 인식될 가능성이 높으므로 항상 위와 동일한 DTD 선언을 적는 것이 좋습니다.


# 태그와 요소

``<h1>제목</h1>``에서

*   ``<h1>``을 여는 태그(start tag)
*   ``</h1>``을 닫는 태그(end tag)
*   ``제목``을 h1 요소의 자식 노드(child node)

라고 부르며 ``<h1>제목</h1>`` 이 전체를 일컬어 h1 요소(element)라고 부릅니다.

한편 ``body`` 요소는 다음과 같이 구성되어 있는데...

{% highlight html %}
<body>
  <h1>제목</h1>
  <p>단락</p>
</body>
{% endhighlight %}

``@pp dom``

위에서 한 것과 비슷한 방식으로 풀어서 설명해보면

*   ``<body>``는 여는 태그
*   ``</body>``는 닫는 태그
*   ``<h1>제목</h1>``과 ``<p>단락</p>``는 각각 body 요소의 자식 노드

입니다.


# 속성

[meta 요소](/html/meta.html)는 아래와 같이 특이한 구조를 갖습니다:

{% highlight html %}
<meta charset="utf-8">
{% endhighlight %}

[meta 요소](/html/meta.html)는 지금까지 봤던 다른 요소와 두 가지 점에서 다릅니다:

1.  닫는 태그가 없습니다.
2.  여는 태그 안에 이상한 글자(``charset="utf-8"``)가 담겨 있습니다.

닫는 태그가 없는 이유는 [meta 요소](/html/meta) 안에는 담을 수 있는 내용이 없기 때문입니다. 여는 태그 안에 들어있는 글자는 속성(attribute)이라고 합니다. 속성은 ``이름="값"`` 형식으로 표기합니다. 따라서 위 메타 태그는 ``charset``이라는 이름의 속성을 가지고 있으며 그 값은 ``utf-8``입니다.

[meta 요소](/html/meta.html)는 여러가지 용도로 쓰이는데 위 예시에서는 이 문서가 ``utf-8``이라는 문자셋으로 저장되어 있음을 나타내는 용도로 쓰였습니다. 문자셋이란 컴퓨터가 글자(한글, 영문 등)를 저장하는 방식을 나타내는데, ``utf-8``은 그 중에서도 다국어로 작성된 문서를 저장할 때 가장 널리 쓰이는 방식입니다.


# 들여쓰기와 줄바꿈

지금까지의 논리적인 포함 관계에 맞춰 들여쓰기를 했지만, 이는 HTML 문서를 작성하는 사람이 보기 편하게 하기 위한 것이고 사실은 아래와 같이 들여쓰기를 하지 않아도 상관 없습니다:

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>제목</title>
</head>
<body>
<h1>제목</h1>
<p>단락</p>
</body>
</html>
{% endhighlight %}

줄바꿈도 마찬가지입니다. 모두 한 줄로 붙여서 쓰거나, 줄바꿈을 다른 방식으로 해도 동일한 HTML 문서입니다:

{% highlight html %}
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>제목</title></head>
<body><h1>제목</h1><p>단락</p></body>
</html>
{% endhighlight %}

하지만 HTML 문서가 길고 복잡할수록 줄바꿈과 들여쓰기를 적절히 활용하는 것이 중요해집니다. 그렇지 않으면 읽고 쓰기가 어렵기 때문입니다.


# 올바른 HTML 작성하기

지금까지 살펴본 내용 이외에도 HTML 문서 작성시 지켜야할 많은 규칙들이 있습니다.

## 태그 열고 닫기

수식에서의 괄호와 마찬가지로 태그도 여는 태그와 닫는 태그의 쌍이 잘 맞아야 합니다. 예를 들어 다음 HTML은 올바르지만

{% highlight html %}
<p>태그를 열고 닫는 <em>순서</em>를 잘 지켜야 합니다</p>
{% endhighlight %}

다음에 나오는 두 HTML은 올바르지 않습니다. 첫번째 HTML은 여닫는 순서가 꼬여서 문제가 있고, 두번째 HTML은 닫는 em 태그(``</em>``)가 없어서 문제입니다.

{% highlight html %}
<p>태그를 열고 닫는 <em>순서</p>를 잘 지켜야 합니다</em>
{% endhighlight %}

{% highlight html %}
<p>태그를 열고 닫는 <em>순서를 잘 지켜야 합니다</p>
{% endhighlight %}

이 규칙에는 몇 가지 예외가 있습니다:

*   [meta 요소](/html/meta.html), [img 요소](/html/img.html), [br 요소](/html/br.html) 등은 요소 하위에 들어갈 수 있는 것이 없으므로 닫는 태그가 따로 없습니다. 이러한 태그를 "스스로 닫히는 태그(self-closing tags)"라고 부릅니다.
*   그 밖에도 특정 맥락에서 닫는 태그를 생략해도 되는 경우가 있습니다. 하지만 가장 기억하기 쉽고 안전한 방법은 스스로 닫히는 태그를 제외한 모든 태그는 닫는 태그를 순서에 맞게 써주는 것입니다.


## 요소의 갯수, 위치, 순서

들어 하나의 HTML 문서에 두 개의 [body 요소](/html/body.html)가 나와서는 안됩니다. 또는, 목록 내의 항목을 의미하는 [li 요소](/html/li.html)는 반드시 [ul 요소](/html/ul.html) 또는 [ol 요소](/html/ol.html) 안에만 쓸 수 있습니다. 따라서 다음 예시들은 모두 올바른 HTML이 아닙니다:

{% highlight html %}
<body>
  <p>첫번째 body</p>
</body>

<body>
  <p>두번째 body. 잘못된 HTML 입니다.</p>
</body>
{% endhighlight %}

{% highlight html %}
<p>
  <li>ul이나 ol이 아닌 곳에 li가 있으므로 잘못된 HTML 입니다.</li>
</p>
{% endhighlight %}

## 유효성 검사 프로그램

HTML의 문법은 생각보다 복잡해서 완전히 외우기 쉽지 않고, 익숙해진 후에도 간혹 실수를 하게 됩니다. 가장 좋은 방법은 유효성 검사 프로그램을 사용하여 자신이 작성하고 있는 HTML 문서를 최대한 자주 검사하는 것입니다. HTML 문법에 대한 더 자세한 내용 및 문법 검사를 자동으로 수행하는 방법에 대해서는 [유효성 검사](/docs/Validation.html) 문서를 참고하세요.
