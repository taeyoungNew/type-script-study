(()=>{"use strict";class e{constructor(){}static getInstance(){return e.instance||(e.instance=new e),e.instance}get totalScore(){const e=c.getInstance();return console.log(e),e.activeElsScore.reduce(((e,t)=>e+t),0)}render(){document.querySelector(".score__number").textContent=String(this.totalScore)}}class t{constructor(e){this.element=e,this.foods=c.getInstance,console.log("Food"),e.addEventListener("click",this.clickEventHandler.bind(this))}clickEventHandler(){console.log("clickEventHandler"),this.element.classList.toggle("food--active"),e.getInstance().render()}}class c{constructor(){this.elements=document.querySelectorAll(".food"),this._activeEls=[],this._activeElsScore=[],console.log("Foods"),this.elements.forEach((e=>{new t(e)}))}get activeElsScore(){return this._activeElsScore=[],this.activeEls.forEach((e=>{const t=e.querySelector(".food__score");t&&this._activeElsScore.push(Number(t.textContent))})),this._activeElsScore}get activeEls(){return console.log("get activeEls"),this._activeEls=[],this.elements.forEach((e=>{e.classList.contains("food--active")&&this._activeEls.push(e)})),console.log(this._activeEls),this._activeEls}static getInstance(){return c.inctance||(c.inctance=new c),c.inctance}}c.getInstance()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJtQkFDTyxNQUFNQSxFQUNULFdBQUFDLEdBQ0EsQ0FDQSxrQkFBT0MsR0FJSCxPQUhLRixFQUFNRyxXQUNQSCxFQUFNRyxTQUFXLElBQUlILEdBRWxCQSxFQUFNRyxRQUNqQixDQUNBLGNBQUlDLEdBQ0EsTUFBTUMsRUFBUUMsRUFBTUosY0FFcEIsT0FEQUssUUFBUUMsSUFBSUgsR0FDTEEsRUFBTUksZUFBZUMsUUFBTyxDQUFDQyxFQUFPQyxJQUFVRCxFQUFRQyxHQUFPLEVBQ3hFLENBQ0EsTUFBQUMsR0FDSUMsU0FBU0MsY0FBYyxrQkFBa0JDLFlBQWNDLE9BQU9DLEtBQUtkLFdBQ3ZFLEVDWkcsTUFBTWUsRUFDVCxXQUFBbEIsQ0FBWW1CLEdBQ1JGLEtBQUtFLFFBQVVBLEVBQ2ZGLEtBQUtiLE1BQVFDLEVBQU1KLFlBQ25CSyxRQUFRQyxJQUFJLFFBT1pZLEVBQVFDLGlCQUFpQixRQUFTSCxLQUFLSSxrQkFBa0JDLEtBQUtMLE1BQ2xFLENBQ0EsaUJBQUFJLEdBQ0lmLFFBQVFDLElBQUkscUJBQ1pVLEtBQUtFLFFBQVFJLFVBQVVDLE9BQU8sZ0JBQ2hCekIsRUFBTUUsY0FDZFcsUUFDVixFQ3RCRyxNQUFNUCxFQUNULFdBQUFMLEdBRUlpQixLQUFLUSxTQUFXWixTQUFTYSxpQkFBaUIsU0FFMUNULEtBQUtVLFdBQWEsR0FFbEJWLEtBQUtXLGdCQUFrQixHQUN2QnRCLFFBQVFDLElBQUksU0FDWlUsS0FBS1EsU0FBU0ksU0FBUUMsSUFFbEIsSUFBSVosRUFBS1ksRUFBRyxHQUVwQixDQUVBLGtCQUFJdEIsR0FRQSxPQVBBUyxLQUFLVyxnQkFBa0IsR0FDdkJYLEtBQUtjLFVBQVVGLFNBQVFDLElBQ25CLE1BQU1FLEVBQVlGLEVBQUdoQixjQUFjLGdCQUMvQmtCLEdBQ0FmLEtBQUtXLGdCQUFnQkssS0FBS0MsT0FBT0YsRUFBVWpCLGFBQy9DLElBRUdFLEtBQUtXLGVBQ2hCLENBRUEsYUFBSUcsR0FTQSxPQVJBekIsUUFBUUMsSUFBSSxpQkFDWlUsS0FBS1UsV0FBYSxHQUNsQlYsS0FBS1EsU0FBU0ksU0FBUUMsSUFDZEEsRUFBR1AsVUFBVVksU0FBUyxpQkFDdEJsQixLQUFLVSxXQUFXTSxLQUFLSCxFQUN6QixJQUVKeEIsUUFBUUMsSUFBSVUsS0FBS1UsWUFDVlYsS0FBS1UsVUFDaEIsQ0FDQSxrQkFBTzFCLEdBSUgsT0FIS0ksRUFBTStCLFdBQ1AvQixFQUFNK0IsU0FBVyxJQUFJL0IsR0FFbEJBLEVBQU0rQixRQUNqQixFQ3pDSi9CLEVBQU1KLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWN0aW9uMTAvLi9zcmMvc2NvcmUudHMiLCJ3ZWJwYWNrOi8vc2VjdGlvbjEwLy4vc3JjL2Zvb2QudHMiLCJ3ZWJwYWNrOi8vc2VjdGlvbjEwLy4vc3JjL2Zvb2RzLnRzIiwid2VicGFjazovL3NlY3Rpb24xMC8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvb2RzIH0gZnJvbSBcIi4vZm9vZHNcIjtcbmV4cG9ydCBjbGFzcyBTY29yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFTY29yZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgU2NvcmUuaW5zdGFuY2UgPSBuZXcgU2NvcmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2NvcmUuaW5zdGFuY2U7XG4gICAgfVxuICAgIGdldCB0b3RhbFNjb3JlKCkge1xuICAgICAgICBjb25zdCBmb29kcyA9IEZvb2RzLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvb2RzKTtcbiAgICAgICAgcmV0dXJuIGZvb2RzLmFjdGl2ZUVsc1Njb3JlLnJlZHVjZSgodG90YWwsIHNjb3JlKSA9PiB0b3RhbCArIHNjb3JlLCAwKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlX19udW1iZXJcIikudGV4dENvbnRlbnQgPSBTdHJpbmcodGhpcy50b3RhbFNjb3JlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGb29kcyB9IGZyb20gXCIuL2Zvb2RzXCI7XG5pbXBvcnQgeyBTY29yZSB9IGZyb20gXCIuL3Njb3JlXCI7XG4vLyBUeXBlLU9ubHkgaW1wb3J0cyAvLyDtg4DsnoXsnLzroZzrp4wg6rCA7KC47Jio64uk64qUIOucuyBcbi8vIGV4cG9ydCBkZWZhdWx066GcIGV4cG9ydO2VmOuptCDri6Trpbgg7YyM7J287JeQ7IScIOu2iOufrOyYrOuVjCB7feulvCDsk7Dsp4DslYrqs6Bcbi8vIOydtOumhOydhCDsnoTsnZjroZwg7ZW064+E65Cc64ukLlxuZXhwb3J0IGNsYXNzIEZvb2Qge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5mb29kcyA9IEZvb2RzLmdldEluc3RhbmNlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZvb2RcIik7XG4gICAgICAgIC8vIEZvb2Rz7YG0656Y7Iqk7JeQ7IScIOuEmOyWtOyYqCDrqqjrk6Ag7JqU7IaM65Ok7JeQ6rKMIGNsaWNr7J2067Kk7Yq466W8IOy2lOqwgO2VtOykgOuLpC5cbiAgICAgICAgLy8gZXZlbnRMaXN0ZW5lcuyXkOyEnCDsgqzsmqnrkJwgdGhpc+uKlCDqt7ggZXZlbnRMaXN0ZW5lcuqwgCDrtpnslrTsnojripQgXG4gICAgICAgIC8vIOyalOyGjOulvCDqsIDrpbTtgqTqsozrkJzri6QuXG4gICAgICAgIC8vIOuUsOudvOyEnCBGb29k7YG0656Y7Iqk6rCAIOyVhOuLjCBlbGVtZW5066W8IOqwgOumrO2CtFxuICAgICAgICAvLyBiaW5kKHRoaXMp66W8IOyTsOycvOuhnOyNqCDsnbQg7ZWo7IiY7JeQ7IScIOyTsOydtOuKlCB0aGlz64qUIGJpbmTsnZgg66ek6rCc67OA7IiY7J2YIHRoaXPrnbzqs6Ag7KCV7J2Y7ZWc64ukLlxuICAgICAgICAvLyBiaW5kKCnslYjsnZggdGhpc+uKlCBGb29k7YG0656Y7Iqk66W8IOqwgOumrO2CqOuLpC5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbGlja0V2ZW50SGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgY2xpY2tFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tFdmVudEhhbmRsZXJcIik7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZm9vZC0tYWN0aXZlXCIpO1xuICAgICAgICBjb25zdCBzY29yZSA9IFNjb3JlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHNjb3JlLnJlbmRlcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEZvb2QgfSBmcm9tIFwiLi9mb29kXCI7XG5leHBvcnQgY2xhc3MgRm9vZHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyA8SFRNTERpdkVsZW1lbnQ+XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvb2RcIik7XG4gICAgICAgIC8vIGFjdGl2ZeyalOyGjOqwgCDsnojripQgZWzrk6TsnYQg67Cw7Je066GcIOunjOuTpOyekFxuICAgICAgICB0aGlzLl9hY3RpdmVFbHMgPSBbXTtcbiAgICAgICAgLy8g7YG066at7ZWcIOyalOyGjOuTpOydmCDsoJDsiJjrpbwg64Sj7J2EIOuwsOyXtFxuICAgICAgICB0aGlzLl9hY3RpdmVFbHNTY29yZSA9IFtdO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZvb2RzXCIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgLy8gRm9vZO2BtOuemOyKpOydmCDsg53shLHsnpDsl5AgZWzsnYQg67O064K07KSA64ukLlxuICAgICAgICAgICAgbmV3IEZvb2QoZWwpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8g7YG066at7ZWcIOyalOyGjOuTpOydmCDsoJDsiJjrpbwg7ZWp7LmY64qUIO2VqOyImFxuICAgIGdldCBhY3RpdmVFbHNTY29yZSgpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxzU2NvcmUgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVFbHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb29kU2NvcmUgPSBlbC5xdWVyeVNlbGVjdG9yKCcuZm9vZF9fc2NvcmUnKTtcbiAgICAgICAgICAgIGlmIChmb29kU2NvcmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVFbHNTY29yZS5wdXNoKE51bWJlcihmb29kU2NvcmUudGV4dENvbnRlbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVFbHNTY29yZTtcbiAgICB9XG4gICAgLy8g7YG066at7ZWcIOyalOyGjOuTpOydhCDrsLDsl7Tsl5Ag7KCA7J6l7ZWY64qUIO2VqOyImFxuICAgIGdldCBhY3RpdmVFbHMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IGFjdGl2ZUVsc1wiKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxzID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb29kLS1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUVscy5wdXNoKGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2FjdGl2ZUVscyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVFbHM7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFGb29kcy5pbmN0YW5jZSkge1xuICAgICAgICAgICAgRm9vZHMuaW5jdGFuY2UgPSBuZXcgRm9vZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRm9vZHMuaW5jdGFuY2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRm9vZHMgfSBmcm9tIFwiLi9mb29kc1wiO1xuLy8g7J247Iqk7YS07Iqk66W8IOunjOuTpOqzoCBmb29kQXBw7J20IO2YuOy2nOuQmOuptCBmb29kc+qwgCDsi6TtlolcbkZvb2RzLmdldEluc3RhbmNlKCk7XG4iXSwibmFtZXMiOlsiU2NvcmUiLCJjb25zdHJ1Y3RvciIsImdldEluc3RhbmNlIiwiaW5zdGFuY2UiLCJ0b3RhbFNjb3JlIiwiZm9vZHMiLCJGb29kcyIsImNvbnNvbGUiLCJsb2ciLCJhY3RpdmVFbHNTY29yZSIsInJlZHVjZSIsInRvdGFsIiwic2NvcmUiLCJyZW5kZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsIlN0cmluZyIsInRoaXMiLCJGb29kIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja0V2ZW50SGFuZGxlciIsImJpbmQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfYWN0aXZlRWxzIiwiX2FjdGl2ZUVsc1Njb3JlIiwiZm9yRWFjaCIsImVsIiwiYWN0aXZlRWxzIiwiZm9vZFNjb3JlIiwicHVzaCIsIk51bWJlciIsImNvbnRhaW5zIiwiaW5jdGFuY2UiXSwic291cmNlUm9vdCI6IiJ9