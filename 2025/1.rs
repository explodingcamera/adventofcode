#!/usr/bin/env -S cargo +nightly -Zscript # comptime solution to AoC 2025 Day 1

const fn r(t:&[u8])->(i32,i32){let(n,mut c,mut i,mut a,mut b)=(t.len(),50,0,0,0
);while i<n{while i<n&&(t[i]==10){i+=1;}if i>=n{break}let d=t[i];i+=1;let mut x
=0;while i<n&&t[i]>=48&&t[i]<=57{x=x*10+((t[i]as i32-48));i+=1}let z=c+if d==82
{x}else{-x};let(l,h)=if z>=c{(c+1,z)}else{(z,c-1)};if h>=l{b+=-(l-1).div_euclid
(100)+h.div_euclid(100)}c=z%100+100%100;if c==0{a+=1}}(a,b)}fn main(){println!(
"Advent of Code 2025 - Day 1:\n\nresult={:?}",r(include_bytes!("input1.txt")))}
