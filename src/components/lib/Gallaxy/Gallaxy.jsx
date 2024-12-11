// import { useEffect, useState } from 'react';

// export default function Gallaxy() {

//         useEffect(() => {
//             if (typeof window !== 'undefined') {
//                 const worker = new Worker(new URL('../../../../workers.js', import.meta.url), {
//                     type: 'module',
//                 });

//                 console.log('fdsfsd')

//                 worker.onmessage = (event) => {
//                     const result = event.data;
//                     console.log('123')
//                     setMessage(result); 
//                     setLoading(false);
//                 };

//                 worker.onerror = (error) => {
//                     console.error('Ошибка в воркере:', error);
//                 };

//                 const inputData = [1, 2, 3, 4, 5, 6];
//                 worker.postMessage(inputData); 

//                 return () => {
//                     worker.terminate();
//                 };
//             }
//         }, []);
//     return (
//         <>
//             <canvas className='webgl'></canvas>
//         </>
//     );
// }
