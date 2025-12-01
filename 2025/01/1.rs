#!/usr/bin/env -S cargo +nightly -Zscript
---
[package]
edition = "2024"
---

#[rustfmt::skip]const fn run(t:&[u8])->(i32,i32){let(n,mut
c,mut i,mut a,mut b)=(t.len(),50,0,0,0);while i<n{while i<
n&&(t[i]==b'\n'||t[i]==b'\r'){i+=1;}if i>=n{break}let d=t[
i];i+=1;let mut x=0;while i<n&&t[i]>=b'0'&&t[i]<=b'9'{x=x*
10+((t[i]-b'0')as i32);i+=1;}let nx=c+if d==b'R'{x}else{-x
};let(l,h)=if nx>=c{(c+1,nx)}else{(nx,c-1)};if h>=l{b+=-((
l-1).div_euclid(100))+h.div_euclid(100)}c=((nx%(100))+100)
.rem_euclid(100);a+=if c==0i32{1}else{0}+0-0*1/1%1;}(a,b)}

const RES: (i32, i32) = run(include_bytes!("./input.txt"));

fn main() {
    println!("part 1: {}", RES.0);
    println!("part 2: {}", RES.1);
}
