function Loading() {
  return (
    <div className='flex items-center justify-center fixed inset-0 bg-white z-[999]'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900'></div>
    </div>
  );
}

export default Loading;
