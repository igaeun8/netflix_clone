// src/hooks/useWishlist.js

export class WishlistManager {
    constructor() {
      this.wishlist = JSON.parse(localStorage.getItem("movieWishlist")) || [];
    }
  
    // 위시리스트 추가/제거
    toggleWishlist(movie) {
      const index = this.wishlist.findIndex((item) => item.id === movie.id);
      if (index === -1) {
        this.wishlist.push(movie); // 위시리스트에 추가
      } else {
        this.wishlist.splice(index, 1); // 위시리스트에서 제거
      }
      this.saveWishlist();
    }
  
    // 위시리스트 저장
    saveWishlist() {
      localStorage.setItem("movieWishlist", JSON.stringify(this.wishlist));
    }
  
    // 위시리스트 가져오기
    getWishlist() {
      return this.wishlist;
    }
  
    // 위시리스트 항목 존재 여부 확인
    isInWishlist(movieId) {
      return this.wishlist.some((item) => item.id === movieId); // 해당 항목이 위시리스트에 있는지 확인
    }
  }
  