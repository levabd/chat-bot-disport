<?php

/* F:\xampp\htdocs\disport/themes/demo/layouts/default.htm */
class __TwigTemplate_44c1d64e6262b457df081766a1101314172d3e40bcf1ed5898a583e950b3ed60 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html>

<head>
    <meta charset=\"utf-8\">
    <title>SPASTIKA - ";
        // line 6
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->getSourceContext(), twig_get_attribute($this->env, $this->getSourceContext(), ($context["this"] ?? null), "page", array()), "title", array()), "html", null, true);
        echo "</title>
    <meta name=\"description\" content=\"";
        // line 7
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->getSourceContext(), twig_get_attribute($this->env, $this->getSourceContext(), ($context["this"] ?? null), "page", array()), "meta_description", array()), "html", null, true);
        echo "\" />
    <meta name=\"title\" content=\"";
        // line 8
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->getSourceContext(), twig_get_attribute($this->env, $this->getSourceContext(), ($context["this"] ?? null), "page", array()), "meta_title", array()), "html", null, true);
        echo "\" />
    <meta name=\"author\" content=\"Oleg Levitsky https://github.com/levabd\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
    <link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"";
        // line 11
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/apple-icon-57x57.png");
        echo "\">
    <link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"";
        // line 12
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/apple-icon-60x60.png");
        echo "\">
    <link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"";
        // line 13
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/apple-icon-72x72.png");
        echo "\">
    <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"";
        // line 14
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/apple-icon-76x76.png");
        echo "\">
    <link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"";
        // line 15
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/apple-icon-114x114.png");
        echo "\">
    <link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"";
        // line 16
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/apple-icon-120x120.png");
        echo "\">
    <link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"";
        // line 17
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/apple-icon-144x144.png");
        echo "\">
    <link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"";
        // line 18
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/apple-icon-152x152.png");
        echo "\">
    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"";
        // line 19
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/apple-icon-180x180.png");
        echo "\">
    <link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"";
        // line 20
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/android-icon-192x192.png");
        echo "\">
    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"";
        // line 21
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/favicon-32x32.png");
        echo "\">
    <link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"";
        // line 22
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/favicon-96x96.png");
        echo "\">
    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"";
        // line 23
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/favicon-16x16.png");
        echo "\">
    <link rel=\"manifest\" href=\"";
        // line 24
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/manifest.json");
        echo "\">
    <meta name=\"msapplication-TileColor\" content=\"#ffffff\">
    <meta name=\"msapplication-TileImage\" content=\"";
        // line 26
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/ms-icon-144x144.png");
        echo "\">
    <meta name=\"theme-color\" content=\"#ffffff\">
    <link rel=\"stylesheet\" href=\"";
        // line 28
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/vendor/bootstrap/css/bootstrap.min.css");
        echo "\"> ";
        echo $this->env->getExtension('Cms\Twig\Extension')->assetsFunction('css');
        echo $this->env->getExtension('Cms\Twig\Extension')->displayBlock('styles');
        // line 29
        echo "</head>

<body>

    <!-- Header -->
    <header id=\"layout-header\">
        ";
        // line 35
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction("site/header"        , $context['__cms_partial_params']        , true        );
        unset($context['__cms_partial_params']);
        // line 36
        echo "    </header>

    <!-- Content -->
    <section id=\"layout-content\">
        ";
        // line 40
        echo $this->env->getExtension('Cms\Twig\Extension')->pageFunction();
        // line 41
        echo "    </section>

    <!-- Footer -->
    <footer id=\"layout-footer\">
        ";
        // line 45
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction("site/footer"        , $context['__cms_partial_params']        , true        );
        unset($context['__cms_partial_params']);
        // line 46
        echo "    </footer>

    <!-- Scripts -->
    <script src=\"";
        // line 49
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/vendor/jquery-3.2.1.slim.min.js");
        echo "\"></script>
    <script src=\"";
        // line 50
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/vendor/popper.min.js");
        echo "\"></script>
    <script src=\"";
        // line 51
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/vendor/bootstrap/js/bootstrap.min.js");
        echo "\"></script>
    ";
        // line 52
        echo '<script src="'. Request::getBasePath()
                .'/modules/system/assets/js/framework.js"></script>'.PHP_EOL;
        echo '<script src="'. Request::getBasePath()
                    .'/modules/system/assets/js/framework.extras.js"></script>'.PHP_EOL;
        echo '<link rel="stylesheet" property="stylesheet" href="'. Request::getBasePath()
                    .'/modules/system/assets/css/framework.extras.css">'.PHP_EOL;
        echo " ";
        echo $this->env->getExtension('Cms\Twig\Extension')->assetsFunction('js');
        echo $this->env->getExtension('Cms\Twig\Extension')->displayBlock('scripts');
        // line 53
        echo "
</body>

</html>";
    }

    public function getTemplateName()
    {
        return "F:\\xampp\\htdocs\\disport/themes/demo/layouts/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  164 => 53,  154 => 52,  150 => 51,  146 => 50,  142 => 49,  137 => 46,  133 => 45,  127 => 41,  125 => 40,  119 => 36,  115 => 35,  107 => 29,  102 => 28,  97 => 26,  92 => 24,  88 => 23,  84 => 22,  80 => 21,  76 => 20,  72 => 19,  68 => 18,  64 => 17,  60 => 16,  56 => 15,  52 => 14,  48 => 13,  44 => 12,  40 => 11,  34 => 8,  30 => 7,  26 => 6,  19 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("<!DOCTYPE html>
<html>

<head>
    <meta charset=\"utf-8\">
    <title>SPASTIKA - {{ this.page.title }}</title>
    <meta name=\"description\" content=\"{{ this.page.meta_description }}\" />
    <meta name=\"title\" content=\"{{ this.page.meta_title }}\" />
    <meta name=\"author\" content=\"Oleg Levitsky https://github.com/levabd\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
    <link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"{{ 'assets/images/apple-icon-57x57.png'|theme }}\">
    <link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"{{ 'assets/images/apple-icon-60x60.png'|theme }}\">
    <link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"{{ 'assets/images/apple-icon-72x72.png'|theme }}\">
    <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"{{ 'assets/images/apple-icon-76x76.png'|theme }}\">
    <link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"{{ 'assets/images/apple-icon-114x114.png'|theme }}\">
    <link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"{{ 'assets/images/apple-icon-120x120.png'|theme }}\">
    <link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"{{ 'assets/images/apple-icon-144x144.png'|theme }}\">
    <link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"{{ 'assets/images/apple-icon-152x152.png'|theme }}\">
    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"{{ 'assets/images/apple-icon-180x180.png'|theme }}\">
    <link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"{{ 'assets/images/android-icon-192x192.png'|theme }}\">
    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"{{ 'assets/images/favicon-32x32.png'|theme }}\">
    <link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"{{ 'assets/images/favicon-96x96.png'|theme }}\">
    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"{{ 'assets/images/favicon-16x16.png'|theme }}\">
    <link rel=\"manifest\" href=\"{{ 'assets/images/manifest.json'|theme }}\">
    <meta name=\"msapplication-TileColor\" content=\"#ffffff\">
    <meta name=\"msapplication-TileImage\" content=\"{{ 'assets/images/ms-icon-144x144.png'|theme }}\">
    <meta name=\"theme-color\" content=\"#ffffff\">
    <link rel=\"stylesheet\" href=\"{{ 'assets/vendor/bootstrap/css/bootstrap.min.css'|theme }}\"> {% styles %}
</head>

<body>

    <!-- Header -->
    <header id=\"layout-header\">
        {% partial 'site/header' %}
    </header>

    <!-- Content -->
    <section id=\"layout-content\">
        {% page %}
    </section>

    <!-- Footer -->
    <footer id=\"layout-footer\">
        {% partial 'site/footer' %}
    </footer>

    <!-- Scripts -->
    <script src=\"{{ 'assets/vendor/jquery-3.2.1.slim.min.js'|theme }}\"></script>
    <script src=\"{{ 'assets/vendor/popper.min.js'|theme }}\"></script>
    <script src=\"{{ 'assets/vendor/bootstrap/js/bootstrap.min.js'|theme }}\"></script>
    {% framework extras %} {% scripts %}

</body>

</html>", "F:\\xampp\\htdocs\\disport/themes/demo/layouts/default.htm", "");
    }
}
