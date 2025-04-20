function removeBold(text) {
    // 匹配并保留中间内容：**xxx** -> xxx
    return text.replace(/\*\*(.*?)\*\*/g, '$1');
}

// 确保 context 里被替换
if (typeof addPreContextFilter === 'function') {
    addPreContextFilter((text) => {
        return removeBold(text);
    });
}
