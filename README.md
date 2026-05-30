# Mini-Exercise-7

A link to the GitHub repository: https://github.com/bechornoga/Mini-Exercise-7



1. The output is:
1
4
3
2

Explanation:
console.log(1) and console.log(4) are synchronous, so they run first.
The Promise.then() is a microtask, so it runs after the synchronous code but before setTimeout.
setTimeout(..., 0) is a macrotask, so it runs last, even with 0 delay.



2. The output is:
2
4
1
3

Explanation:
First, the main code runs and puts:
setTimeout(() => console.log(1), 0);
in the macrotask queue.
Then the Promise runs before setTimeout, because Promises are microtasks:
console.log(2);
Inside that Promise, another setTimeout is added for 3, and another Promise is added for 4.
Microtasks run before macrotasks, so 4 is printed before the timeouts.
Finally, the timeouts run in the order they were added:
1
3



3. console.log(4) runs first because it is synchronous and appears before calling demo().
Then demo() is called. An async function starts running immediately until the first await, so:
console.log(1); runs next.
When JavaScript reaches: await Promise.resolve(); the function pauses, and the rest of the function is moved to the microtask queue.
Then the main code continues:
console.log(5);
So 5 is printed before 2 and 3.
After the synchronous code finishes, the microtasks continue:
console.log(2);
Then there is another await, so it pauses again, and finally:
console.log(3);




4. The program starts by calling level1().
Even though level1 is an async function, it starts running immediately until it reaches its first await.
First, level1 prints 6, then it calls and waits for level2().
level2 starts running immediately, prints 4, and then waits for level3().
level3 starts running immediately and prints 1.
Then it creates a new Promise. The code inside the Promise runs immediately, so it prints 2 before the function pauses.
After resolve() is called, the await waits for the Promise to finish, and then level3 continues and prints 3.
Only after level3 finishes, level2 continues and prints 5.
Finally, after level2 finishes, level1 continues and prints 7.



5. The program starts by calling level1().
level1 is an async function, but it starts running immediately.
First, it prints 6.
Then it calls level2(). Since there is no await before level2(), level1 does not wait for it to finish.
level2 starts running immediately and prints 4.
Inside level2, it calls await level3(), so level2 waits for level3 to finish.
level3 starts running immediately and prints 1.
Then a new Promise is created. The code inside the Promise runs immediately, so it prints 2.
After resolve() is called, the await pauses level3, so JavaScript goes back to the remaining synchronous code.
Because level1 did not wait for level2, it continues and prints 7.
After the synchronous code finishes, the async functions continue.
level3 continues and prints 3.
Then level3 finishes, so level2 continues and prints 5.