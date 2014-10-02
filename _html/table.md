---
title: table
html5ref: table
---
table [요소](/docs/HTML_Element.html)는 "표"를 마크업할 때 쓰입니다.

{% highlight html %}
<table>
  <caption>표 1. 최근에 읽은 책</caption>
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

위 표의 논리적 구조는 아래와 같습니다.

``@pp dom``

``table``은 [thead 요소](/html/thead.html), [tbody 요소](/html/tbody.html), [tfoot 요소](/html/tfoot.html) 요소로 구성됩니다. 단 상단이나 하단에 헤더나 풋터가 없는 경우 ``thead``나 ``tfoot``은 생략할 수 있습니다. 위 예시에서는 ``tfoot``을 사용하지 않고 있습니다.

``caption``은 표의 제목입니다. 제목이 없는 경우 생략할 수 있습니다.

``thead``, ``tbody``, ``tfoot`` 요소 안에는 표의 각 행(row)을 나타내는 [tr 요소](/html/tr.html)를 넣습니다. 예를 들어 표의 본문에 세 개의 행이 있는 경우 아래와 같이 마크업 합니다:

{% highlight html %}
<table>
  <tbody>
    <tr>...</tr>
    <tr>...</tr>
    <tr>...</tr>
  </tbody>
</table>
{% endhighlight %}

마지막으로, 각 ``tr`` 요소 안에는 표의 각 칸을 뜻하는 [td 요소](/html/td.html)를 넣을 수 있습니다. 각 행이 두 개의 열로 구성되어 있다면 아래와 같이 마크업 합니다:

{% highlight html %}
<table>
  <tbody>
    <tr>
        <td>...</td>
        <td>...</td>
    </tr>
    <tr>
        <td>...</td>
        <td>...</td>
    </tr>
    <tr>
        <td>...</td>
        <td>...</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

표의 특정 칸이 데이터가 아닌 레이블(제목 등)인 경우 ``td`` 보다는 [th 요소](/html/th.html)를 쓰는 것이 더 의미를 잘 담아낼 수 있습니다.
