// 싱글 쓰레드 - 한 번에 하나의 태스크만 실행

// function sleep(func, delay) {
//     //Date.now()는 현재 시간을 숫자(ms)로 반환;
//     const delayUntil = Date.now() + delay;

// //현재 시간에 delay를 더한 delayUntil이 현재 시간보다 작으면 계속 반복
// while (Date.now() < delayUntil);
// //delay가 경과한 이후에 func를 호출
// func();
// }

// function foo() {
//     console.log('foo');
// }

// function bar() {
//     console.log('bar');
// }

// //sleep함수는 3초 이상 실행
// sleep(foo,3*1000);
// //bar함수는 sleep함수의 실행이 종료된 이후에 호출되므로 3초이상 블로킹
// bar();
// //(3초 경과 후)foo 호출 -> bar 호출



//비동기식 처리

// function foo() {
//     console.log('foo');
// }
// function bar() {
//     console.log('bar');
// }
// //타이머함수 setTimeout은 일정 시간이 경과한 이후에 콜백함수 foo 호출
// //타이머함수 setTimeout은 bar함수를 블로킹하지 않음
// setTimeout(foo,3*1000);
// bar();
// //bar호출 -> 3초 경과 후 foo호출



// //브라우저 환경에서의 동작
// function foo() {
//     console.log('foo');
// }
// function bar() {
//     console.log('bar');
// }
// setTimeout(foo,0); //0초(실제는 최소4ms 후에) 콜백함수인 foo 함수가 실행
// //setTimeout은 Web API영역(브라우저)에 위임됨
// //foo 함수는 Web API영역(브라우저)에 등록
// //타이머 0ms(4ms) -> 콜백함수 foo는 태스크 큐에 들어감
// bar();
// //콜 스택에 bar() 쌓이고 바로 실행
// //콜 스택은 Global EC만 남음, Task Queue에는 foo콜백이 들어있는 상태
// //Event Loop의 개입으로 콜 스택이 비면 Task Queue에서 콜백(foo)을 가져다 실행
// //Event Loop가 foo를 콜 스택에 올리고 실행


// 단계별 실행:
// ✅ setTimeout(...) → 콜 스택에 올라감

// ⏱ Web API가 타이머 시작 + 콜백 저장

// 🔁 setTimeout(...) → 콜 스택에서 빠짐

// ⌛ 1000ms 후, 콜백이 → Task Queue로 이동

// 📭 Event Loop가 콜 스택이 비었는지 확인

// 💥 비어 있으면 Task Queue의 콜백을 → 콜 스택에 넣음

// 🧠 콜 스택에서 실행 → 콘솔 출력!

//호출 스케줄링 - 함수를 명시적으로 호출하지 않고 일정 시간이 경과된 이후에 호출
//타이머 함수
            //setTimeout, setInterval : 타이머를 생성할 수 있는 함수
            //clearTimeout, clearInterval: 타이머를 제거할 수 있는 함수

// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출
setTimeout(() => console.log('Hi1'), 1000);
//Web API 영역에서 타이머 시작
//1000ms 후 () => console.log('Hi1')이 Task Queue에 들어감

//1초(1000ms)후 타이머가 만료되면 콜백 함수가 호출
//이때 콜백 함수에 'Conan'이이 인수로 전달된다
setTimeout(name => console.log(`Hi2! ${name}.`), 1000, 'Conan');
//Wep API에서 타이머 시작
//Task Queue에 들어감(콜백함수 + 인자Conan)
//1000ms 후 name => console.log(`Hi2! ${name}.`) 실행 시 'Conan'을 name인자로 전달


//두번째 인수(delay)를 생략하면 기본값 0이 지정
setTimeout(() => console.log('Hello3!'));
console.log("aaa");
//현재 실행중인 콜 스택이 비면 즉시 실행(위 1초 타이머들보다 먼저 실행)

//1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출
//setTimeout 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환
const timerId = setTimeout(() => console.log('Hi!4'), 1000);
//Web API에서 타이머 시작 + 동시에 id 반환해 timerId에 저장
//Task Queue에 들어감(콜백 () => {}함수, 딜레이, timerId) //setTimeOut()은 timerId를반환
//타이머 식별 아이디를 timerId에 저장

//setTimeout 함수가 반환한 타이머id를 clearTimeout함수의 인수로 전달하여
//타이머를 취소 -> setTimeout함수의 콜백 함수가 실행되지 않음
clearTimeout(timerId);
//4번 타이머를 실행 전에 제거 -> console.log('Hi!4') 실행되지 않음
//timerId 를 Web API에서 제거