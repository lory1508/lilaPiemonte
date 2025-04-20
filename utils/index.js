const goto = async (href, target = '_self') => {
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
      open: {
        target,
      },
    })
  } else {
    await navigateTo(href, {
      open: {
        target,
      },
    })
  }
}

export { goto }
