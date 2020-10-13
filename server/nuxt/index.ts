import { Nuxt } from '@nuxt/core';
import { loadNuxt } from 'nuxt';
import { BundleBuilder } from '@nuxt/webpack';
import { Builder } from '@nuxt/builder';
import config from '../../nuxt.config.js';

export default class NuxtServer {
  private static instance: NuxtServer;
  public nuxt: Nuxt;

  public async run(shouldBuild = true): Nuxt {
    const dev = process.env.NODE_ENV !== 'production';
    let nuxt: Nuxt;

    // Build only in dev mode
    if (dev && shouldBuild) {
      console.log('Building nuxt...');
      nuxt = await loadNuxt('dev');
      const builder = new Builder(nuxt, BundleBuilder);
      const res = await builder.build();

      this.nuxt = res.nuxt;

      return res.nuxt;
    } else {
      console.log(dev, shouldBuild);

      nuxt = await loadNuxt('start');
    }

    if (this.nuxt) {
      return this.nuxt;
    }

    return nuxt;
  }

  public static getInstance(): NuxtServer {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new NuxtServer();
      return this.instance;
    }
  }
}
