import { useRouteError } from 'react-router-dom';

interface RouteError {
   statusText?: string;
   message?: string;
}

export const Error = () => {
   const error = useRouteError() as RouteError;
   return (
      <div>
         <h1>오류가 발생했습니다.</h1>
         <p>상세 오류 내용</p>
         <p>{error.statusText}</p>
         <p>{error.message}</p>
      </div>
   );
};
