---
title: CSS
---
CSS는 <strong>C</strong>ascading <strong>S</strong>tyle<strong>s</strong>heet의 약자이며 [HTML](/docs/HTML.html) 같은 마크업 언어로 작성된 문서를 꾸미기 위해 사용합니다.


# 따라하기

HTML 문서의 [head 요소](/html/head.html) 안에 [style 요소](/html/style.html)를 넣고 CSS 코드를 적으면 해당 문서를 다양하게 꾸밀 수 있습니다:

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello</title>
    <style>
    p {
      color: white;
      text-decoration: underline;
      background-color: black;
    }
    </style>
  </head>
  <body>
    <p>Hello HTML5!</p>
  </body>
</html>
{% endhighlight %}

위 문서에서 ``style`` 요소 안에 들어있는

{% highlight css %}
p {
  color: white;
  text-decoration: underline;
  background-color: black;
  text-align: right;
}
{% endhighlight %}

부분이 CSS 입니다.

위 문서는 아래와 같이 표현됩니다:

<blockquote>
<p style="color: white; text-decoration: underline; background-color: black; text-align: right;">Hello HTML5!</p>
</blockquote>

# 문법 설명

CSS는 아래 형식으로 작성합니다:

    selector {
      property: value;
      property: value;
      ...
    }

``selector``는 문서의 특정 부분을 지정하는 역할을 합니다. ``property: value;``는 어떤 속성에 어떤 스타일 값을 지정할 것인지를 명시하며 선언(declaration)이라고 부릅니다. 예를 들어

>   모든 단락을 우측 정렬하기

는 CSS로 아래와 같이 표현됩니다:

{% highlight css %}
p {
  text-align: right;
}
{% endhighlight %}

위 예시에서 ``selector``는 ``p``이므로 문서 내의 모든 p 요소를 뜻합니다. ``text-align: right;``는 ``text-align``(텍스트 정렬)이라는 속성(property)의 값을 ``right``(우측)로 지정하겠다는 의미입니다.

아래와 같이 하나의 ``selector``에 대하여 여러 개의 선언을 한 번에 적을 수도 있습니다:

{% highlight css %}
p {
  color: white;
  text-decoration: underline;
  background-color: black;
  text-align: right;
}
{% endhighlight %}

텍스트 색상(color)은 흰색, 텍스트 꾸미기(text-decoration)는 밑줄, 배경색(background-color)은 검정색, 텍스트 정렬(text-align)은 우측으로 지정하고 있습니다.


# 관련 문서

*   CSS selector에 대한 더 자세한 설명은 [Selector](/css/Selector.html) 문서를 참고하세요
