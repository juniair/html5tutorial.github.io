---
title: 문서 객체 모델
---
브라우저는 HTML 문서를 읽어서 DOM(문서 객체 모델; Document Object Model)을 생성합니다.

예를 들어 아래와 같은 HTML을 작성하면...

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>DOM</title>
  </head>
  <body>
    <h1>DOM</h1>
    <p>
        브라우저는 HTML 문서을 읽어서
        <strong>문서 객체 모델(Document Object Model)</strong>
        을 생성합니다.
    </p>
  </body>
</html>
{% endhighlight %}

아래와 같은 DOM이 생성됩니다:

``@pp dom``

문서 객체 모델은 탐색기의 폴더 구조와 유사한 형태를 띕니다. 이 형태를 트리 구조(tree structure)라고 부릅니다. 트리 구조의 친숙한 예 중 하나는 가계도(family tree)입니다. 실제로 HTML 문서 객체 모델에서는 가계도에서 차용한 용어를 써서 각 요소들 사이의 관계를 지칭합니다.


# 용어들

``@pp dom``

## 뿌리

위 구조에서 최상단에 있는 노드를 뿌리(root)라고 부릅니다. 모든 HTML 문서의 뿌리에는 항상 [html 요소](/html/html.html)가 있습니다.

## 후손과 조상

특정 노드의 하위에 속한 노드를 후손(descendant) 노드라고 부릅니다. 예를 들어 [head 요소](/html/head.html), [body 요소](/html/body.html), [p 요소](/html/p.html) 등은 모두 [html 요소](/html/html.html)의 후손입니다.

특정 노드의 상위에 있는 노드를 조상(ancsetor) 노드라고 부릅니다. 예를 들어 [html 요소](/html/html.html)는 모든 요소의 조상 노드입니다. [body 요소](/html/body.html)는 [p 요소](/html/p.html), [strong 요소](/html/strong.html) 등의 조상 노드입니다.

## 자식과 부모

특정 노드의 직계 후손은 특별히 자식(children) 노드라고 부릅니다. 예를 들어 [head 요소](/html/head.html)와 [body 요소](/html/body.html)는 [html 요소](/html/html.html)의 자식 노드입니다. [h1 요소](/html/h1.html)와 [p 요소](/html/p.html)는 [body 요소](/html/body.html)의 자식 노드입니다.

특정 노드의 직계 조상은 특별히 부모(parent) 노드라고 부릅니다. 예들 들어 [head 요소](/html/head.html)와 [body 요소](/html/body.html)의 부모 노드는 [html 요소](/html/html.html)입니다. [h1 요소](/html/h1.html)와 [p 요소](/html/p.html)의 부모 노드는 [body 요소](/html/body.html)입니다.

## 형제

부모가 같은 노드들을 형제(sibling) 노드라고 부릅니다. 예를 들어 [head 요소](/html/head.html)와 [body 요소](/html/body.html)는 서로 형제입니다. 비슷하게 [h1 요소](/html/h1.html)와 [p 요소](/html/p.html)도 같은 부모([body 요소](/html/body.html))의 자식이므로 서로 형제입니다.
