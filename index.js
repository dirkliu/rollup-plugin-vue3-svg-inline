import {createFilter} from '@rollup/pluginutils' 
import {compile} from '@vue/compiler-dom'

export default function vue3SvgInline (options = {}) {
  const filter = createFilter(options.include, options.exclude)
  return {
    name: 'vue3SvgInline',

    transform (source, id) {
      if (!filter(id)) return null  
      const parsedSvg = source.replace(/\\\"/g, '\"')
        .replace(/(\\r)|(\\n)|(fill\=\"[^\"]*\")|(width=\"[^\"]*\")|(height=\"[^\"]*\")/g, '')
        // remove style tags.
        .replace(/\<style(\s[^\<\>]*)*\>.*(?=\<\/style\>)\<\/style\>/, '')
        .match(/\<svg(\s[^\<\>]*)*\>.*\<\/svg\>/)[0]

      const {code} = compile(parsedSvg, {
        mode: 'module'
      })
      // render function now is included in code
      return `
        import {h} from 'vue'
        ${code}
        export default {
          data () {
            return {}
          },
          render
      }`
    }
  } 
}