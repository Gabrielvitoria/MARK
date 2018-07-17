using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using MARK.Authorization;

namespace MARK
{
    [DependsOn(
        typeof(MARKCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class MARKApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<MARKAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(MARKApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddProfiles(thisAssembly)
            );
        }
    }
}
