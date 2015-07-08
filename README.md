# 스타벅스 무선랜 자동 접속 플러그인

![sucks](https://raw.githubusercontent.com/mrz1277/Starsucks/master/images/sucks.jpg)

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

아래 링크를 클릭해서 설치하세요.

*  [크롬](https://chrome.google.com/webstore/detail/starsucks/ccpijncgingpepdgbjaglhnomiikmenp): 크롬 웹스토어에서 설치
*  [사파리](https://github.com/mrz1277/Starsucks/releases/download/1.0.0/Starsucks.safariextz): 다운 받은 후 더블 클릭으로 설치

_파이어폭스와 인터넷 익스플로러는 개발 계획 없습니다._

# 사용법

1. 본인이 카페에서 주로 사용하는 브라우저 플러그인을 미리 설치합니다.

2. 카페에서 `olleh_starbucks` 에 접속합니다.
(_OS X 유저는 자동으로 뜨는 팝업창을 끄고 진행하셔야 합니다. [참고](#os-x-참고))_

3. 플러그인이 깔린 브라우저를 엽니다.

4. 접속 페이지에 접근하기 위해 주소창에 아무 URL이나 입력합니다. (예: google.com)

5. 접속 페이지가 뜨면 처음 사용시 아래와 같은 화면이 뜹니다.

![popup](https://raw.githubusercontent.com/mrz1277/Starsucks/master/images/popup.png)

6. 메세지창을 닫고 앞으로 자동 접속에 사용할 정보들을 입력하고 동의 버튼을 누릅니다.

7. 다음부터는 4번 과정까지 똑같이 하면 자동으로 값을 입력되고 인터넷에 접속할 수 있습니다.

# OS X 참고

맥에서 통신사 와이파이에 접속하면 자동으로 다음과 같은 팝업창이 뜹니다.

![CNA](https://raw.githubusercontent.com/mrz1277/Starsucks/master/images/CNA.png)

사파리도 아닌것이 윈도우 레벨은 최상위로 잡히고, 1Password 같은 서드파티 플러그인은 인식되지 않습니다.
바로 `Captive Network Assistant` 라는 앱이 작동한 결과인데요, 외국 커뮤니티에 보면 이 앱의 이름을 다른것으로 바꾸면 동작하지 않는다고 합니다.

```
sudo mv /System/Library/CoreServices/Captive\ Network\ Assistant.app/ /System/Library/CoreServices/XCaptive\ Network\ Assistant.app/
```

하지만 OS X 10.11(El Capitan)에서는 관리자 권한을 가진 사용자도 시스템 파일 변경을 금지하고 있기 때문에 강제로 Rootless 기능을 비활성하지 않는한 변경할 수 없음을 참고하셔야 합니다.

# 마무리

저의 다른 프로젝트들과 마찬가지로 사이트 보수 및 개선으로 현 무선인터넷 사용 구조가 변경되어 작동하지 않을 경우 언제든 다른 개발자분께서 풀 리퀘스트 해주시면 감사하겠습니다.
