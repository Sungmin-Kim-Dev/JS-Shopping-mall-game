### HTML, CSS, JavaScript로 쇼핑몰 미니게임 만들기
(드림코더 엘리 강의)
(Link: https://academy.dream-coding.com/courses/mini-shopping)

#### Web Link
https://shopping-mall-mini-game.netlify.app/

#### 사용 언어
HTML, CSS, JavaScript

#### 제작 순서
1. HTML, CSS를 이용하여 페이지 구조와 스타일 만들기
2. JSON 파일에서 데이터 가져오기
3. 가져온 데이터를 HTML에 표시하기
4. 6가지 필터 버튼을 이용해서 아이템 필터링
5. 상단의 로고 버튼을 누르면 모든 목록이 나오게 설정

#### 2가지 방식의 자바스크립트
- main.js:
    - 가져온 데이터를 HTML에 표시하는 방법: innerHTML 이용
    - 필터링 방법: 해당 목록만 추려서 다시 표시하기
    - 이 방법의 단점: innerHTML 방식은 상대적으로 속도가 느리고, 필터링 방법도 버튼을 누를 때마다 요소가 다시 표시되므로 실행 속도가 느림
- main-filter.js:
    - 가져온 데이터를 HTML에 표시하는 방법: HTML 요소를 자바스크립트에서 생성하는 방식
    - 필터링 방법: 전체 요소에서 해당하지 않는 요소에만 클래스 이름을 추가하여 숨김
    - 이 방법의 장점: 버튼을 눌러 필터링할 때 요소를 다시 그릴 필요가 없으므로 갱신 속도가 빠르고, 처음 목록을 표시할 때도 createElements와 append를 이용하므로 실행 속도가 빠름
(두 방식의 실행 속도 차이에 관한 참고 자료: DO NOT use innerHTML - 2 BIG Reasons Why | Javascript Optimization Tips by Dave Gray https://www.youtube.com/watch?v=ILcu32Nkq_I)