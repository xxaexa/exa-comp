import ca from "./../assets/client/a.png";
import cb from "./../assets/client/b.png";
import cc from "./../assets/client/c.png";
import cd from "./../assets/client/d.png";
import ce from "./../assets/client/e.png";
import cf from "./../assets/client/f.png";
import cg from "./../assets/client/g.png";
import ch from "./../assets/client/h.png";
import ci from "./../assets/client/i.png";
import cj from "./../assets/client/j.png";
import ck from "./../assets/client/k.png";
import cl from "./../assets/client/l.png";

import p1 from "./../assets/product/cpu-a.png";
import pa from "./../assets/product/cpu-b.png";
import p2 from "./../assets/product/cpu-c.png";
import pb from "./../assets/product/cpu-d.png";
import p3 from "./../assets/product/cpu-e.png";
import pc from "./../assets/product/cpu-f.png";
import p4 from "./../assets/product/cpu-g.png";
import pd from "./../assets/product/cpu-h.png";

import r1 from "./../assets/review/r-1.png";
import r2 from "./../assets/review/r-2.png";
import r3 from "./../assets/review/r-3.png";
import r4 from "./../assets/review/r-4.png";
import r5 from "./../assets/review/r-5.png";
import r6 from "./../assets/review/r-6.png";
import r7 from "./../assets/review/r-7.png";

import a1 from "./../assets/article/genshin.jpg";
import a2 from "./../assets/article/valorant.jpg";

import a from "./../assets/carousel/5162027.jpg";
import b from "./../assets/carousel/5451540.jpg";
import c from "./../assets/carousel/5931481.jpg";

import cpu1 from "./../assets/carousel/cpu1.png";

export const carousel = [
  {
    id: 1,
    bg: a,
    image: cpu1,
    text: "MAG FORGE 112R ",
  },
  {
    id: 2,
    bg: b,
    image: cpu1,
    text: "CHIST Budget ",
  },
  {
    id: 3,
    bg: c,
    image: cpu1,
    text: "GALAX PC ",
  },
];

export const clients = [
  { id: 1, image: ca },
  { id: 2, image: cb },
  { id: 3, image: cc },
  { id: 4, image: cd },
  { id: 6, image: ce },
  { id: 7, image: cf },
  { id: 8, image: cg },
  { id: 9, image: ch },
  { id: 10, image: ci },
  { id: 11, image: cj },
  { id: 12, image: ck },
  { id: 13, image: cl },
];

export const products = [
  { id: 1, name: "CPU-01", images: [p1, pa] },
  { id: 2, name: "CPU-02", images: [p2, pb] },
  { id: 3, name: "CPU-03", images: [p3, pc] },
  { id: 4, name: "CPU-04", images: [p4, pd] },
];

export const reviews = [
  { id: 1, name: "Review RAM", image: r1, date: "12-jan-2024" },
  { id: 2, name: "Review AMD", image: r2, date: "12-feb-2024" },
  { id: 3, name: "Review SSD", image: r3, date: "24-feb-2024" },
  { id: 4, name: "Review SSD", image: r4, date: "12-mar-2024" },
  { id: 5, name: "Review FAN", image: r5, date: "23-mar-2024" },
  { id: 6, name: "Review Mobo", image: r6, date: "12-apr-2024" },
  { id: 7, name: "Review PSU", image: r7, date: "29-apr-2024" },
];

export const articles = [
  { id: 1, name: "Article 01", image: a1, date: "12-jan-2024" },
  { id: 2, name: "Article 02", image: a2, date: "28-feb-2024" },
];
