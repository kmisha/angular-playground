import { Observable, catchError, finalize, of, throwError, timeout } from 'rxjs';
import { expect, test as it, beforeEach, describe, vi } from 'vitest';
import { TestScheduler } from 'rxjs/testing';

describe('RxJs Error Handling', () => {
    let rxjs: TestScheduler;
    const values = {a: 1, b: 2, c:3};

    beforeEach(() => {
        rxjs = new TestScheduler((a, e) => expect(a).toEqual(e));
    });

    describe('The Observable Contract and Error Handling', () => {
        it('the stream has ended its lifecycle without any error', () => {
            const stream = new Observable(sub => {
                sub.next(1);
                sub.next(2);
                sub.next(3);

                sub.complete();

                sub.error('Error');
            })
            const next = vi.fn();
            const error = vi.fn();
            const complete = vi.fn();


            stream.subscribe({ next, error, complete })

            expect(next).toBeCalledTimes(3);
            expect(error).not.toHaveBeenCalledOnce();
            expect(complete).toHaveBeenCalledOnce();
        });

        it('after completion, the stream will not emit any further values', () => {
            const stream = new Observable(sub => {
                sub.next(1);
                sub.next(2);
                sub.next(3);

                sub.complete();

                sub.next(4);
            })
            const next = vi.fn();
            const error = vi.fn();
            const complete = vi.fn();


            stream.subscribe({ next, error, complete })

            expect(next).toBeCalledTimes(3);
            expect(error).not.toHaveBeenCalledOnce();
            expect(complete).toHaveBeenCalledOnce();
        });

        it('after the error is thrown, the stream will not emit any other values', () => {
            const stream = new Observable(sub => {
                sub.next(1);
                sub.next(2);
                sub.next(3);

                sub.error('Error');

                sub.next(4);

                sub.complete();
            })
            const next = vi.fn();
            const error = vi.fn();
            const complete = vi.fn();

            stream.subscribe({ next, error, complete });

            expect(next).toBeCalledTimes(3);
            expect(error).toHaveBeenCalledOnce();
            expect(complete).not.toHaveBeenCalledOnce();
        });
    })

    describe('The catchError Operator', () => {
        it('The Catch and Replace Strategy', () => {
            rxjs.run(({cold, expectObservable}) => {
                const stream = cold('-a-#-b', {a: 1, b: 2});
                const errorHandler = () => of(3);

                expectObservable(stream.pipe(catchError(errorHandler))).toBe('-a-(c|)', { a: 1, b: 2, c:3 });
            });
        });

        it('The Catch and Rethrow Strategy', () => {
            rxjs.run(({ cold, expectObservable }) => {
                const stream = cold('-a-#-b', { a: 1, b: 2 });
                const errorHandler = () => throwError(() => 'error');

                expectObservable(stream.pipe(catchError(errorHandler))).toBe('-a-#', { a: 1, '#': 'Error' });
            });
        });
    });

    it('The Finalize Operator', () => {
        const stream = throwError(() => 'error');
        const spy = vi.fn();
        const error = vi.fn();
        const next = vi.fn();
        const complete = vi.fn();

        stream.pipe(finalize(spy)).subscribe({next, error, complete});

        expect(spy).toHaveBeenCalledOnce();
        expect(next).not.toHaveBeenCalled();
        expect(error).toHaveBeenCalledOnce();
        expect(complete).not.toHaveBeenCalled();
    });
});
