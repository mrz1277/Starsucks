# 스타벅스 무선랜 자동 접속 플러그인

![sucks](https://raw.githubusercontent.com/mrz1277/Starsucks/master/sucks.jpg)

카페에 종종 노트북을 가지고 가서 작업한다.
보통 카페에 있는 무선공유기는 비밀번호를 입력하는 방식이다.(아예 없는 경우도 있지만)
하지만 KT 무선공유기를 쓰는 스타벅스만 유일하게 사용자 개인정보와 동의를 매번 구한다.
자주 이용하는 고객 입장에선 한번 저장 시켜놓은 패스워드로 계속 이용하는 방식이 더 간편하다.

그동안 이런 가려운 부분을 긁어줄 프로그램들과 인증을 우회하는 방법들이 몇몇 있었다.
최근 알게된 브라우져 [북마크 방식의 스크립트](http://tumblog.ryubro.com/post/119509867393/starbucks-wifi-bookmarklet)가 있고,
그보다 훨씬 전에 한 개발팀에서 만든 [크롬 확장 프로그램](https://chrome.google.com/webstore/detail/ladybucks/fnpekdnicnempagdlmphknomnopaognh?hl=ko)이 있었다.
북마크 방식은 간편하지만 약간의 수작업(클릭 3번)이 필요하고, 크롬 확장 프로그램은 오래되서 현재 작동하지 않는다.
이참에 현 스타벅스의 정책을 최대한 위반하지 않는 선에서(무작위 값 입력 방지) 브라우저에서 작동하는 확장 프로그램을 만들어 보았다.

# 지원 브라우저

- [x] [크롬](https://chrome.google.com/webstore/detail/starsucks/ccpijncgingpepdgbjaglhnomiikmenp)
- [x] [사파리]
- [ ] 파이어폭스
- [ ] 인터넷 익스플로러

저의 다른 프로젝트들과 마찬가지로 사이트 보수 및 개선으로 현 무선인터넷 사용 구조가 변경되어 작동하지 않을 경우 다른 개발자분께서 풀 리퀘스>트 해주시면 감사하겠습니다. 참고로 다른 브라우저 플러그인 개발은 당분간 계획 없습니다.
