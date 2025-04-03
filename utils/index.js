const goto = async (href) => {
  console.log(href.split('/')[0])
  if (href.includes('http')) {
    await navigateTo(href, {
      external: true,
      open: {
        target: '_blank',
      },
    })
  } else if (href.includes('mailto')) {
    await navigateTo(href, {
      external: true,
    })
  } else {
    await navigateTo(href)
  }
}

export { goto }
