jest.useFakeTimers();

const {debounce} = require('./debounce');

test('runs debounce as expected', () => {
    const test = jest.fn();
    
    const debounced = debounce(test, 1000);

    debounced();
    expect(test).not.toBeCalled();
    debounced();

    jest.runAllTimers();

    expect(test).toBeCalled();
    expect(test).toHaveBeenCalledTimes(1);
});
