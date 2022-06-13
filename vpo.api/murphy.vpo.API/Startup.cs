using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using murphy.vpo.BAL.Abstract;
using murphy.vpo.BAL.Concrete;
using murphy.vpo.Core.DataAccess;
using murphy.vpo.Core.DataAccess.EntityFramework;
using murphy.vpo.DAL.Abstract;
using murphy.vpo.DAL.Concrete.EntityFramework;
using System.Reflection;
using System.Text;

namespace murphy.vpo.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  builder =>
                                  {
                                      builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
                                  });
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "murphy.vpo.API", Version = "v1" });
            });

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.AddAutoMapper(Assembly.GetExecutingAssembly());

            services.AddDbContext<VpoDbContext>(option =>
            option.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"), b => b.MigrationsAssembly("murphy.vpo.API")));

            services.AddScoped(typeof(IEntityRepository<>), typeof(EfEntityRepositoryBase<>));

            services.AddScoped<IUserDal, EfUserDal>();
            services.AddScoped<IUserService, UserManager>();
            services.AddScoped<IRoleDal, EfRoleDal>();
            services.AddScoped<IRoleService, RoleManager>();
            services.AddScoped<IAuthService, AuthManager>();
            services.AddScoped<IUserRoleService, UserRoleManager>();
            services.AddScoped<IUserRoleDal, EfUserRoleDal>();
            services.AddScoped<IPetDal, EfPetDal>();
            services.AddScoped<IPetService, PetManager>();

            services.AddScoped<IProductDal, EfProductDal>();
            services.AddScoped<IProductService, ProductManager>();

            services.AddScoped<IProductCategoryDal, EfProductCategoryDal>();
            services.AddScoped<IProductCategoryService, ProductCategoryManager>();
            services.AddScoped<ICurrencyUnitDal, EfCurrencyUnitDal>();
            services.AddScoped<ICurrencyUnitService, CurrencyUnitManager > ();

            services.AddScoped<IMeasurementUnitDal, EfMeasurementUnitDal>();
            services.AddScoped<IMeasurementUnitService, MeasurementUnitManager>();

            services.AddScoped<IClinicalInformationDal, EfClinicalInformationDal>();
            services.AddScoped<IClinicalInformationService, ClinicalInformationManager>();

            services.AddScoped<IInvoiceDal, EfInvoiceDal>();
            services.AddScoped<IInvoiceService, InvoiceManager>();

            services.AddScoped<IReportDal, EfReportDal>();
            services.AddScoped<IReportService, ReportManager>();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII
                            .GetBytes(Configuration.GetSection("AppSettings:Token").Value)),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });
            services.AddAuthorization(options =>
            {
                options.AddPolicy("RequireAdminRole", policy => policy.RequireRole("Admin"));
                options.AddPolicy("RequireModerateRole", policy => policy.RequireRole("Admin", "Moderator"));
            });

            services.AddCors();


            services.AddMvc(options =>
            {
                var policy = new AuthorizationPolicyBuilder()
                    .RequireAuthenticatedUser()
                    .Build();
                options.Filters.Add(new AuthorizeFilter(policy));
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Murphy.vpo.API v1"));
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }


            app.UseRouting();
            app.UseCors(MyAllowSpecificOrigins);
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
