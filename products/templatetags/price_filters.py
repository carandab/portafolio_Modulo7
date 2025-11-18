from django import template

register = template.Library()


# Formatea un valor numérico como precio en pesos chilenos (CLP)

@register.filter(name='precio_clp')
def precio_clp(value):

    try:
        # Convertir a entero
        value = int(value)
        # Formatear con separador de miles
        return f"${value:,}".replace(',', '.')
    except (ValueError, TypeError):
        return value