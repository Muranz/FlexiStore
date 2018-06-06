using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FlexiStore.Data;
using FlexiStore.Data.Entities;
using FlexiStore.Data.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace FlexiStore
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddMvc();

      services.AddIdentity<StoreUser, IdentityRole>(cfg =>
      {
        cfg.User.RequireUniqueEmail = true;
      })
              .AddEntityFrameworkStores<StoreContext>();

      services.AddAuthentication()
              .AddCookie()
              .AddJwtBearer(cfg =>
              {
                cfg.TokenValidationParameters = new TokenValidationParameters()
                {
                  ValidIssuer = Configuration["Tokens:Issuer"],
                  ValidAudience = Configuration["Tokens:Audience"],
                  IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Tokens:Key"]))
                };

              });

      services.AddDbContext<StoreContext>(options =>
          options.UseSqlServer(Configuration.GetConnectionString("StoreConnectionString")));


      // services.AddAutoMapper();

      //services.AddTransient<IMailService, NullMailService>();
      // Support for real mail service

      services.AddTransient<StoreSeeder>();
      services.AddTransient<IProductRepository, ProductRepository>();
      services.AddTransient<ICategoryRepository, CategoryRepository>();

      //services.AddScoped<IDutchRepository, DutchRepository>();

      services.AddMvc()
      //  (opt =>
      //{
      //  if (_env.IsProduction() && Configuration["DisableSSL"] != "true")
      //  {
      //    opt.Filters.Add(new RequireHttpsAttribute());
      //  }
      //})
        .AddJsonOptions(opt => opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);

    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseMvc(routes =>
      {
        routes.MapRoute(
            name: "default",
            template: "{controller=Home}/{action=Index}/{id?}");

        routes.MapSpaFallbackRoute(
            name: "spa-fallback",
            defaults: new { controller = "Home", action = "Index" });
      });
    }
    }
}
