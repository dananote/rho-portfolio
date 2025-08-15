// 상태 타입 정의
export type HomeAnimationState = {
  isHomeAnimation: boolean;
  animationDuration: number;
};

// 액션 타입 정의
export type HomeAnimationAction = {
  setIsHomeAnimation: (isHomeAnimation: boolean) => void;
};

// homeAnimationStore 타입 정의
export type HomeAnimationStore = HomeAnimationState & HomeAnimationAction;
