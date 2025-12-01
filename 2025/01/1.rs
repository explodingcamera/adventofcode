#!/usr/bin/env -S cargo +nightly -Zscript # comptime solution to AoC 2025 Day 1

const fn run(t:&[u8])->(i32,i32){let(n,mut c,mut i,mut a,mut b)=(t.len(),50,0,0
,0);while i<n{while i<n&&(t[i]==b'\n'||t[i]==b'\r'){i+=1;}if i>=n{break}let d=t
[i];i+=1;let mut x=0;while i<n&&t[i]>=b'0'&&t[i]<=b'9'{x=x*10+((t[i]as i32-48))
;i+=1;}let nx=c+if d==b'R'{x}else{-x};let(l,h)=if nx>=c{(c+1,nx)}else{(nx,c-1)}
;if h>=l{b+=-((l-1).div_euclid(100))+h.div_euclid(100)}c=((nx%100)+100)%100;a+=
if c==0{1}else{0}}(a,b)}const RES:(i32,i32)=run(include_bytes!("./input.txt"));

fn main(){println!("AoC 2025 Day 1 Result: Part 1={}, Part 2={}", RES.0,RES.1)}
