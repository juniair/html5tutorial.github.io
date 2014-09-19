---
title: 기본적인 HTML 태그들
---

HTML에는 수십가지 태그가 있고, 각 태그는 서로 다른 속성을 가지기 때문에 이 모든 것을 한번에 모두 익히기는 어렵습니다. 이 문서는 자주 쓰이는 몇 가지 태그들과 속성을 간략히 소개합니다.

# 텍스트 레벨 태그들 - a, em, strong

요소들:

*   [a 요소](/html/a.html): HTML에서 가장 중요한 태그를 하나만 꼽자면 문서 사이의 하이퍼링크를 표시할 때 사용하는 a 태그를 꼽을 수 있습니다
*   [em 요소](/html/em.html): 문장의 일부분을 강조(emphasis)할 때 사용합니다
*   [strong 요소](/html/strong.html): 강한 강조(strong emphasis)

예시:

{% highlight html %}
<p>
  <strong>HTML</strong>은 <em>Hypertext Markup Language</em>의 약자입니다.
  <a href="http://www.w3.org/People/Berners-Lee/">Tim Berners-Lee</a>가
  최초로 고안하였습니다.
</p>
{% endhighlight %}

``@pp run``


# 단락과 소제목 - p, h1, h2, h3, h4, h5, h6

요소들:

*   [p 요소](/html/p.html): 단락(paragraph)을 표시할 때 사용합니다.
*   [h1 요소](/html/h1.html): 최상위 제목
*   [h2 요소](/html/h2.html), ..., [h6 요소](/html/h6.html): 하위 단계의 소제목들

예시:

{% highlight html %}
<h1>HTML 자습서</h1>
<h2>준비물</h2>
<p>준비물은 어쩌고 저쩌고...</p>
<h2>HTML</h2>
<p>HTML은 웹 페이지를 만들 때 사용되는 문서 형식입니다.</p>
<h2>CSS</h2>
<p>CSS는 HTML 등의 마크업 언어로 작성된 문서를 꾸미기 위해 사용합니다.</p>
{% endhighlight %}

``@pp run``


# 목록 - ul, ol, li

요소들:

*   [ul 요소](/html/ul.html): 순서 없는 목록(unordered list)
*   [ol 요소](/html/ol.html): 순서 있는 목록(ordered list)
*   [li 요소](/html/li.html): 목록 안에 담기는 각 항목들

예시:

{% highlight html %}
<p>점식에 뭐 먹을까?</p>
<ul>
  <li>짜장면</li>
  <li>탕수육</li>
  <li>짬뽕</li>
</ul>

<p>좋아하는 음식 순서는?</p>
<ol>
  <li>탕수육</li>
  <li>짜장면</li>
  <li>짬뽕</li>
</ol>
{% endhighlight %}

``@pp run``


# 표 - table, thead, tbody, tr, th, td

요소들:

*   [table 요소](/html/table.html): 표
*   [thead 요소](/html/thead.html): 표의 머리 부분(table head)
*   [tbody 요소](/html/tbody.html): 표의 몸통 부분(table body)
*   [tr 요소](/html/tr.html): 표의 각 행(table row)
*   [td 요소](/html/td.html): 표의 데이터가 담기는 블럭(table data)
*   [th 요소](/html/th.html): 열 제목, 행 제목 등 데이터가 아닌 내용이 담기는 블럭(table header)

예시:

{% highlight html %}
<table>
  <thead>
    <tr>
      <th>제목</th>
      <th>저자</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>나의 한국 현대사</td>
      <td>유시민</td>
    </tr>
    <tr>
      <td>What is History</td>
      <td>E. H. Carr</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

``@pp run``


# 미디어 - img, video, audio

요소:

*   [img 요소](/html/img.html): 이미지
*   [video 요소](/html/video.html): 동영상
*   [audio 요소](/html/audio.html): 소리

예시:

{% highlight html %}
<p>
  문장 중간에
  <img src="http://www.w3.org/Press/Stock/Berners-Lee/2001-europaeum-eighth.jpg" alt="Tim Berners-Lee 얼굴">
  이미지를 넣어보아요.
</p>
{% endhighlight %}

``@pp run``


# 다음 단계

*   [유효성 검사](/docs/Validation.html)
