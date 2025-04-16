export default function CallbackTest(x, add) {
    function increase(x,) {
        let result = x + x;
        console.log(result);
        // add(result);
    }

    console.log("콜백함수 테스트");
    increase(0, (result) => {
        console.log(result);
        increase(result, (result) => {
            console.log(result);
            increase(result, (result) => {
                console.log(result);
            });
        });
    });
    return (
        <div>
            <h1></h1>
        </div>
    );
};