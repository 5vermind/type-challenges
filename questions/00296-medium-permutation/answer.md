```typescript
type Permutation<T, K = T> = 
  [T] extends [never] 
    ? []
    : K extends K
      ? [K, ...Permutation<Exclude<T, K>>]
      : never
```

`[T] extends [never]`

T extends never는 잘 안된대. never는 conditional에서 empty union 취급이 됨. 기본적으로 유니온 타입은 conditional 구문에서 분배됨. 

따라서 never를 그냥 넣으면 빈 유니온 취급되어서 ignore된다. 진짜 'never'인지를 알려면 튜플에 넣으면 된다.

`K extends K`

K가 유니온이라면 condition이 distributing됨에 따라서 'a' , 'b' , 'c'가 나눠지는 효과를 얻을 수 있다.

![image](https://user-images.githubusercontent.com/39900428/208558155-e67ef7ad-2ede-4ed9-afbc-93335ef7dd07.png)


요렇게 iterating이 된다.
