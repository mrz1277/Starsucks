# 스타벅스 와이파이 자동 완성 플러그인

![sucks](https://raw.githubusercontent.com/mrz1277/Starsucks/master/images/sucks.jpg)

스타벅스에서 와이파이 연결할때마다 이름, 이메일등 똑같은 값을 입력해야 하는 번거로움을 줄이고자 만들었습니다. 한번 입력해놓은 값을 자동으로 채워서 연결합니다.

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

하지만 OS X 10.11(El Capitan)에서는 관리자 권한을 가진 사용자도 시스템 파일 변경을 금지하고 있기 때문에 강제로 Rootless 기능을 비활성하지 않는한 변경할 수 없는 점 참고하세요.

# 입력 정보 수정

사파리는 환경설정(⌘,)에서 `확장 프로그램` 탭에 가면 입력 정보를 수정할 수 있습니다.

![pref](https://raw.githubusercontent.com/mrz1277/Starsucks/master/images/safari_pref.png)

크롬은 별도의 수정할 수 있는 창이 없어서 다시 재설치하셔야 합니다.

# 마무리

저의 다른 프로젝트들과 마찬가지로 사이트 보수 및 개선으로 현 무선인터넷 사용 구조가 변경되어 작동하지 않을 경우 언제든 다른 개발자분께서 풀 리퀘스트 해주시면 감사하겠습니다.
